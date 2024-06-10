import { z } from "zod";

export const createBookingSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  day: z.string(),
  time: z.string(),
});

export type CreateBookingSchema = z.infer<typeof createBookingSchema>;
