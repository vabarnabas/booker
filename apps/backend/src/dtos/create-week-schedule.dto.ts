import { z } from "zod";

export const createWeekScheduleDto = z.object({
  availableDays: z.array(z.string()),
  applicationId: z.string(),
});

export type CreateWeekScheduleDto = z.infer<typeof createWeekScheduleDto>;
