import { I_GlobalJwtType } from "./common.interface";

declare global {
  namespace Express {
    interface Request {
      user: I_GlobalJwtType;
    }
  }
}
