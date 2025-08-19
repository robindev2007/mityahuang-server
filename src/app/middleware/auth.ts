import { UserRole } from "@prisma/client";
import httpStatus, { StatusCodes } from "http-status-codes";
import env from "../../config/clean-env";
import AppError from "../../errors/appError";

import { I_GlobalJwtPayload } from "../../interface/common.interface";
import asyncHandler from "../../lib/utils/async-handler";
import { verifyToken } from "../../lib/utils/auth.utils";
import prisma from "../../lib/utils/prisma.utils";

export const authGuard = (...requiredRole: UserRole[]) =>
  asyncHandler(async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        "Authorization header missing",
      );
    }

    const token = authorization.split(" ")[1];

    // if token is available or not
    if (!token) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        "Token is missing from header",
      );
    }

    //  Verify token
    const decoded = verifyToken(
      token,
      env.JWT_ACCESS_TOKEN,
    ) as I_GlobalJwtPayload;

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    //  check if user exists in DB by id
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "user doesn't exist");
    }

    // verify role for authorization
    if (requiredRole && !requiredRole.includes(decoded.role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You are not authorized by this role!",
      );
    }

    //  setting the decode value into JwtPayload
    req.user = decoded as I_GlobalJwtPayload;

    next();
  });
