import { z } from "zod";

const newSocialMediaSchema = z.object({
  body: z.object({
    link: z.string().min(3),
    status: z.enum(["Normal", "Hidden"]).optional(),
  }),
});

const updateSocialMediaSchema = z.object({
  body: z.object({
    link: z.string().min(3).optional(),
    status: z.enum(["Normal", "Hidden"]).optional(),
  }),
});

export const socialMediaValidation = {
  newSocialMediaSchema,
  updateSocialMediaSchema,
};
