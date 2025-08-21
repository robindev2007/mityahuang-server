// ** Verifying the token
import { StatusCodes } from "http-status-codes";
import jwt, {
  JsonWebTokenError,
  JwtPayload,
  TokenExpiredError,
} from "jsonwebtoken";
import AppError from "../../errors/appError";

export const verifyToken = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      throw new AppError(StatusCodes.BAD_REQUEST, "Token has expired!");
    }
    if (error instanceof JsonWebTokenError) {
      throw new AppError(StatusCodes.BAD_REQUEST, "Invalid token!");
    }
    throw error; // rethrow other errors
  }
};
