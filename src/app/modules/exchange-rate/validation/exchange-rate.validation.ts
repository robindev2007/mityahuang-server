import { z } from "zod";

export const createExchangeRateSchema = z.object({
  from: z.string().min(3).max(3), // e.g. 'USD'
  to: z.string().min(3).max(3), // e.g. 'CNY'
  rate: z.number().positive(), // e.g. 7.18
});

// Infer the TypeScript type from Zod schema
export type T_CreateExchangeRateInput = z.infer<
  typeof createExchangeRateSchema
>;
