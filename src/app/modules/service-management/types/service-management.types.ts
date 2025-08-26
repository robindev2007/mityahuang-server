import { z } from "zod";
import { serviceManagementValidation } from "../validation/service-management.validation";

export type T_CreateServiceManagement = z.infer<
  typeof serviceManagementValidation.newServiceManagement
>["body"];

export type T_UpdateServiceManagement = z.infer<
  typeof serviceManagementValidation.updateServiceManagement
>["body"];
