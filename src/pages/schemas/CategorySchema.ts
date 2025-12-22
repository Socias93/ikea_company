import z from "zod";

export const schema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Name is required" }),
});

export type CategoryData = z.infer<typeof schema>;
