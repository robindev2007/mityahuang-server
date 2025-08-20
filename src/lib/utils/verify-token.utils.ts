import jwt, { JwtPayload } from "jsonwebtoken";
// ** Verifying the token
export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
