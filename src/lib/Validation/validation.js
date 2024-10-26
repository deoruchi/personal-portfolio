import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Minimum character must be atleast 2" })
    .max(50),
  email: z.string().email({ message: "please enter valid email id" }),
  message: z.string(),
});
