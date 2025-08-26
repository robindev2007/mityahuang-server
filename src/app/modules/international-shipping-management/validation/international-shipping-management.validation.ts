import { LineCharacteristics } from "@prisma/client";
import { z } from "zod";
import { normalOrHiddenZodSchema } from "../../../../global-validation/validation";

const createNewInternationalShipping = z.object({
  body: z.object({
    distributionMode: z.string().min(1),
    billingType: z.string().min(1),
    shippingTime: z
      .string()
      .regex(/^\d+-\d+$/, "Must be like 1-5 (digits-dash-digits)"),
    firstWeight: z.number().min(0),
    continue: z.number().min(0),
    firstWeightCharge: z.number().min(0),
    renewalCharge: z.number().min(0),
    fuelCost: z.number().min(0),
    customsDeclarationFee: z.number().min(0),
    serviceCharge: z.number().min(0),
    volumeRatio: z.number().min(0),
    freeShippingAllowance: z.number().min(0),
    floatingWeight: z.number().min(0),
    weightIntervalFrom: z.number().min(0),
    weightIntervalTo: z.number().min(0),
    maximumWidth: z.number().min(0),
    maximumLength: z.number().min(0),
    maximumHeight: z.number().min(0),
    lineCharacteristics: z.enum([...Object.values(LineCharacteristics)] as [
      string,
      ...string[],
    ]),
    nation: z.string(),
    status: normalOrHiddenZodSchema,
  }),
});

const updateInternationalShipping = z.object({
  body: z.object({
    distributionMode: z.string().min(1).optional(),
    billingType: z.string().min(1).optional(),
    shippingTime: z
      .string()
      .regex(/^\d+-\d+$/, "Must be like 1-5 (digits-dash-digits)")
      .optional(),
    firstWeight: z.number().min(0).optional(),
    continue: z.number().min(0).optional(),
    firstWeightCharge: z.number().min(0).optional(),
    renewalCharge: z.number().min(0).optional(),
    fuelCost: z.number().min(0).optional(),
    customsDeclarationFee: z.number().min(0).optional(),
    serviceCharge: z.number().min(0).optional(),
    volumeRatio: z.number().min(0).optional(),
    freeShippingAllowance: z.number().min(0).optional(),
    floatingWeight: z.number().min(0).optional(),
    weightIntervalFrom: z.number().min(0).optional(),
    weightIntervalTo: z.number().min(0).optional(),
    maximumWidth: z.number().min(0).optional(),
    maximumLength: z.number().min(0).optional(),
    maximumHeight: z.number().min(0).optional(),
    lineCharacteristics: z
      .enum([...Object.values(LineCharacteristics)] as [string, ...string[]])
      .optional(),
    nation: z.string().optional(),
    status: normalOrHiddenZodSchema.optional(),
  }),
});

export const internationalShipping = {
  createNewInternationalShipping,
  updateInternationalShipping,
};
