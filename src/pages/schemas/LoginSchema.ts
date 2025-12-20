import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password cant be less than 8 characters" }),
});

export type loginData = z.infer<typeof schema>;
