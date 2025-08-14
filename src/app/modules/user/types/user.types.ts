import { z } from "zod";
import { userReqDataValidation } from "../validation/user.validation";

export interface I_UserQueryParams {
  page: string;
  limit: string;
  sort?: "asc" | "desc";
  filter?: string;
}

// ** Inhering type from zod
export type T_UserSchema = z.infer<typeof userReqDataValidation.create>["body"];
