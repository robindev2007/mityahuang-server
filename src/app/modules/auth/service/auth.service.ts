import { OauthMethod } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import {
  createAccessToken,
  createRefreshToken,
  generateOTP,
} from "../../../../auth/utils/auth.utils";
import env from "../../../../config/clean-env";
import { verificationOtp } from "../../../../emails/templates/verification-otp";
import AppError from "../../../../errors/appError";
import { validateEncryptedPassword } from "../../../../lib/utils/encryption";
import { sendEmail } from "../../../../lib/utils/send-mail";
import { verifyToken } from "../../../../lib/utils/verify-token.utils";
import { userRepository } from "../../user/repository/user.repository";

export const authServices = {
  // User login service
  login: async (payload: { email: string; password: string }) => {
    const user = await userRepository.getUserByMail({
      email: payload.email,
      omitPwd: false,
    });

    if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, "User doesn't exist");
    }

    if (!user.isVerified) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        "Please verify your email before login!",
      );
    }

    // if user is blocked
    if (user.isBlocked) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        "Your account was blocked by the system! Please contact support!",
      );
    }

    // if user is blocked
    if (!user.authMethod.includes(OauthMethod.EMAIL_PASS)) {
      throw new AppError(
        StatusCodes.BAD_REQUEST,
        "This action is only available for accounts created with email and password!",
      );
    }

    // validate the password
    if (!(await validateEncryptedPassword(payload.password, user.password))) {
      throw new AppError(
        StatusCodes.BAD_REQUEST,
        "Credentials mismatch match!",
      );
    }

    // All payload should include these data for consistency
    const jwtPayload = {
      id: user.id,
      role: user.role,
      email: user.email,
      isBlocked: user.isBlocked,
      isVerified: user.isVerified,
      lastPasswordChangedAt: user.lastPasswordChangedAt,
    };

    const accessToken = createAccessToken(jwtPayload);

    // A token with  15 days of expiry
    const refreshToken = createRefreshToken(jwtPayload);

    return {
      accessToken,
      refreshToken,
    };
  },

  // Re-send verification mail
  resendOPTEmail: async (email: string) => {
    const isUserExist = await userRepository.getUserByMail({ email: email });

    if (!isUserExist) {
      throw new AppError(
        StatusCodes.NOT_FOUND,
        "User doesn't exist by this email!",
      );
    }

    // if user is blocked
    if (isUserExist.isBlocked) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        "Your account was blocked by the system! Please contact support!",
      );
    }

    // if user already verified
    if (isUserExist.isVerified) {
      throw new AppError(StatusCodes.BAD_REQUEST, "User already verified!");
    }

    // 01. Generate a OTP
    const generateSixDigitOpOTP = generateOTP(email);

    // 02. Save the otp in DB with expiry
    await userRepository.updateUserInfo(isUserExist.id, {
      otp: generateSixDigitOpOTP.otp,
      otpExpires: generateSixDigitOpOTP.token,
    });

    // 03. Send the email
    sendEmail({
      to: email,
      subject: "Verify your email",
      html: verificationOtp(String(generateSixDigitOpOTP.otp)),
    });

    return null;
  },

  // Verify the otp
  verifyTheOTP: async (payload: { email: string; otp: number }) => {
    // make a otp verification logic with jwt expires
    const user = await userRepository.getUserByMail({ email: payload.email });

    if (!user) {
      throw new AppError(
        StatusCodes.NOT_FOUND,
        "User doesn't exist by this email!",
      );
    }

    // if user is blocked
    if (user.isBlocked) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        "Your account was blocked by the system! Please contact support!",
      );
    }

    // if user already verified
    if (user.isVerified) {
      throw new AppError(StatusCodes.BAD_REQUEST, "User already verified!");
    }

    // if otpexpires is null
    if (!user.otpExpires) {
      throw new AppError(
        StatusCodes.BAD_REQUEST,
        "Invalid request for verifying OTP!",
      );
    }
    // check if the token is expired or not
    const isTokenExpired = verifyToken(user.otpExpires, env.JWT_OTP_TOKEN) as {
      email: string;
      otp: string;
    };

    if (payload.otp !== Number(isTokenExpired.otp)) {
      throw new AppError(StatusCodes.BAD_REQUEST, "Invalid OTP!");
    }

    await userRepository.updateUserInfo(user.id, {
      isVerified: true,
      otp: null,
      otpExpires: null,
    });

    return null;
  },
};
