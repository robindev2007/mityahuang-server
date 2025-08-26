import { z } from "zod";
import { internationalShipping } from "../validation/international-shipping-management.validation";
import { LineCharacteristics } from "@prisma/client";

export type T_NewInternationalShipping = z.infer<
  typeof internationalShipping.createNewInternationalShipping
>["body"] & {
  lineCharacteristics: LineCharacteristics;
};

export type T_UpdateInternationalShipping = z.infer<
  typeof internationalShipping.updateInternationalShipping
>["body"] & {
  lineCharacteristics: LineCharacteristics;
};
