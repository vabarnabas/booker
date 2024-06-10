import { z } from "zod";

export const createApplicationWithScheduleDto = z.object({
  name: z.string(),
  createdBy: z.string(),
  timeSlot: z.string(),
  availableDays: z.array(z.string()).min(1, "Please select at least one day"),
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

export type CreateApplicationWithScheduleDto = z.infer<
  typeof createApplicationWithScheduleDto
>;
