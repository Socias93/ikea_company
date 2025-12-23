import z from "zod";

export const schema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  age: z.number().min(18, { message: "Age cant be less than 18" }),
  email: z
    .email({ error: "Wrong email format" })
    .min(1, { message: "Email is required" }),
  phone: z.number().min(1, { message: "Phonenumber is required" }),
  role: z.string().min(1, { message: "Role is required" }),
});

export type employeFormData = z.infer<typeof schema>;
