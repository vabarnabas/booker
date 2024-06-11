import { z } from "zod";

export const createAppointmentSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  date: z.string(),
  time: z.string(),
});

export type CreateAppointmentSchema = z.infer<typeof createAppointmentSchema>;
