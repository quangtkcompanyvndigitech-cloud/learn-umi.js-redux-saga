import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Please enter email").email("Invalid email"),
  password: z.string().min(1, "Please enter password").min(3, "At least 3 characters"),
});

export const registerSchema = z
  .object({
    fullName: z.string().min(1, "Please enter full name").min(2, "At least 2 characters"),
    phone: z
      .string()
      .min(1, "Please enter phone number")
      .regex(/^0\d{9,10}$/, "Invalid phone number"),
    email: z.string().min(1, "Please enter email").email("Invalid email"),
    password: z.string().min(1, "Please enter password").min(3, "At least 3 characters"),
    confirmPassword: z.string().min(1, "Please confirm password"),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginValues = z.infer<typeof loginSchema>;
export type RegisterValues = z.infer<typeof registerSchema>;
