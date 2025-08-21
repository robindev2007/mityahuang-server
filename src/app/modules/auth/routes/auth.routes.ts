import { Router } from "express";
import { authControllers } from "../controller/auth.controller";

const authRouter: Router = Router();

// Login authentication
authRouter.route("/login").post(authControllers.login);

// Re-send verification OTP
authRouter
  .route("/resend-verification-otp")
  .post(authControllers.resendVerificationOTPToEmail);

// Verify OTP
authRouter.route("/verify-otp").post(authControllers.verifyOTP);

export const authRoutes = authRouter;
