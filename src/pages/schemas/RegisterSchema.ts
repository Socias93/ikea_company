import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .email({ error: "You must write a valid email" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password cant be less than 8 characters" }),
});

export type registerData = z.infer<typeof schema>;
