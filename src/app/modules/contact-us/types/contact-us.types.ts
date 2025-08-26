import { z } from "zod";
import { contactUsValidation } from "../validation/contact-us.validation";

export type T_NewContactUs = z.infer<typeof contactUsValidation.create>["body"];

export type T_UpdateContactUs = z.infer<
  typeof contactUsValidation.updateStatusSchema
>["body"];
