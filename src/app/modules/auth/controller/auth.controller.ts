import asyncHandler from "../../../../lib/utils/async-handler";

export const authControllers = {
  login: asyncHandler(async (req, res) => {}),

  forgotPassword: async (req, res) => {},

  refreshToken: async (req, res) => {},

  changePassword: async (req, res) => {},

  resendVerificationEmail: async (req, res) => {},
};
