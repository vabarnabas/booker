import { string, z } from "zod";

export const createApplicationSchema = z.object({
  name: z.string(),

  availableDays: z.array(z.string()).min(1, "Please select at least one day"),
  timeSlot: z.string(),
  dailySchedules: z.array(
    z.object({
      day: z.string(),
      startTime: z
        .string()
        .regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
      endTime: z
        .string()
        .regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
    })
  ),
});

export type CreateApplicationSchema = z.infer<typeof createApplicationSchema>;
