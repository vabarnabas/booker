import { z } from "zod";

export const createAppointmentDto = z.object({
  name: z.string(),
  email: z.string().email(),
  date: z.string(),
  time: z.string(),
  applicationId: z.string(),
});

export type CreateAppointmentDto = z.infer<typeof createAppointmentDto>;
