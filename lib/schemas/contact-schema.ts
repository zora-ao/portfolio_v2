import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required"),

  email: z
    .string()
    .email("Invalid email"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});

export type ContactInput = z.infer<typeof ContactSchema>;