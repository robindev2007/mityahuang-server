import { Gender } from "@prisma/client";
import { z } from "zod";

//////////////////////////////////////////
// Profile

//////////////////////////////////////////
const profileSchema = z.object({
  body: z.object({
    firstName: z.string(),
    lastName: z.string().optional(),
    gender: z.enum([...Object.values(Gender)] as [string, ...string[]]),
    dateOfBirth: z.date().optional(),
    phoneNumber: z.string().optional(),
  }),
});
export const profileDataValidation = {
  createProfile: profileSchema,
};
//////////////////////////// <- End -> ////////////////////////////////////////////
