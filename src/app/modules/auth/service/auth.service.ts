import { OauthMethod } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../../auth/utils/auth.utils";
import AppError from "../../../../errors/appError";
import { validateEncryptedPassword } from "../../../../lib/utils/encryption";
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
        StatusCodes.BAD_REQUEST,
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
        StatusCodes.UNAUTHORIZED,
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
};
