import { z } from "zod";
import { normalOrHiddenZodSchema } from "../../../../global-validation/validation";

const newWarehouseSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    numberOfShelves: z.number().int().min(0),
    storagePerShelf: z.number().int().min(0),
    status: normalOrHiddenZodSchema,
  }),
});

const updateWarehouseSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    numberOfShelves: z.number().int().min(0).optional(),
    storagePerShelf: z.number().int().min(0).optional(),
    status: normalOrHiddenZodSchema.optional(),
  }),
});

const updateStorageSchema = z.object({
  body: z.object({
    isFree: z.boolean(),
  }),
});

export const wareHouseValidation = {
  newWarehouseSchema,
  updateWarehouseSchema,
  updateStorageSchema,
};
