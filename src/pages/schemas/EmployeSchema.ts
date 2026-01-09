import z from "zod";

export const schema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Name is required" }),

  email: z
    .email({ error: "Wrong email format" })
    .min(1, { message: "Email is required" }),
  phone: z
    .number({ error: "You must write with numbers" })
    .min(1, { message: "Phonenumber is required" }),
  role: z.string().min(1, { message: "Role is required" }),
});

export type employeFormData = z.infer<typeof schema>;
