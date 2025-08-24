import { z } from "zod";

const newBlogSchema = z.object({
  body: z.object({
    blogTitle: z.string(),
    date: z.coerce.date(),
    level: z.enum(["LatestActivity", "Recommend", "FAQ", "Recommend"]),
    description: z.string().min(6),
  }),
});

const updateBlogSchema = z.object({
  body: z.object({
    blogTitle: z.string().optional(),
    date: z.coerce.date().optional(),
    level: z
      .enum(["LatestActivity", "Recommend", "FAQ", "Recommend"])
      .optional(),
    description: z.string().min(6).optional(),
  }),
});

export const blogValidationSchema = {
  newBlogSchema,
  updateBlogSchema,
};
