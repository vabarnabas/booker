import { z } from "zod";

export const createApplicationDto = z.object({
  name: z.string(),
  createdBy: z.string(),
});

export type CreateApplicationDto = z.infer<typeof createApplicationDto>;
