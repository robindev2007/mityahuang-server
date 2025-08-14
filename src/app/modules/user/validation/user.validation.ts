import { Gender, UserRole } from "@prisma/client";
import { z } from "zod";

// user validation schema via zod
const userSchema = z.object({
  body: z.object({
    email: z.string().trim(),
    password: z
      .string()
      .min(6)
      .max(16)
      .describe(
        "Password should be at least of 6 characters and maximum 16 char",
      ),
    role: z.enum([...Object.values(UserRole)] as [string, ...string[]]),
    isVerified: z.boolean().optional(),
    lastPasswordChangedAt: z.string().default(new Date().toISOString()),
    otp: z.number().optional(),
    otpExpires: z.string().optional(),
  }),
});

//  update user validation schema
const updateUserValidationSchema = z.object({
  body: z.object({
    firstName: z.string().min(1).max(20).trim().optional(),
    lastName: z.string().max(20).trim().optional(),
    gender: z
      .enum([...Object.values(Gender)] as [string, ...string[]])
      .optional(),
  }),
});

//  update user role validation schema
const updateRoleValidationSchema = z.object({
  body: z.object({
    email: z.string().email().trim(),
    role: z.enum([...Object.values(UserRole)] as [string, ...string[]]),
  }),
});

export const userReqDataValidation = {
  create: userSchema,
  update: updateUserValidationSchema,
  roleUpdate: updateRoleValidationSchema,
};

// Type from zod
export type T_ChangeRole = z.infer<typeof updateRoleValidationSchema>;
