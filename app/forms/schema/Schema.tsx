import { ZodType, z } from "zod";

export const SignupSchema: ZodType = z.object({
  fullname: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const LoginSchema: ZodType = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginType = z.infer<typeof LoginSchema>;
export type SignupType = z.infer<typeof SignupSchema>;
