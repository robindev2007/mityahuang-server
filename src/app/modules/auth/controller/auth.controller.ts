import { StatusCodes } from "http-status-codes";
import {
  setAccessToken,
  setRefreshToken,
} from "../../../../auth/utils/auth.utils";
import asyncHandler from "../../../../lib/utils/async-handler";
import sendResponse from "../../../../lib/utils/sendResponse";
import { authServices } from "../service/auth.service";
import { I_LoginBody } from "../types/auth.types";

export const authControllers = {
  // For login
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body as I_LoginBody;

    const { accessToken, refreshToken } = await authServices.login({
      email,
      password,
    });

    // before sending response set the `access` token and `refresh` token into browser cookie
    setAccessToken(res, accessToken);
    setRefreshToken(res, refreshToken);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: "User logged in successful!",
      data: accessToken,
    });
  }),

  // For re-send the verification email
  resendVerificationOTPToEmail: asyncHandler(async (req, res) => {
    const { email } = req.body as { email: string };

    const result = await authServices.resendOPTEmail(email);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: `A otp code has been sent to this email:${email}`,
      data: result,
    });
  }),

  // Verify the otp
  verifyOTP: asyncHandler(async (req, res) => {
    const { email, otp } = req.body as {
      email: string;
      otp: number;
    };

    const result = await authServices.verifyTheOTP({ email, otp });

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: `OTP verified successfully`,
      data: result,
    });
  }),

  forgotPassword: asyncHandler(async (req, res) => {}),

  refreshToken: asyncHandler(async (req, res) => {}),

  changePassword: asyncHandler(async (req, res) => {}),
};
