import { getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.middleware";
import { ApplocationService } from "../services/application.service";
import { zValidator } from "@hono/zod-validator";
import { createApplicationDto } from "../dtos/create-application.dto";
import { WeekScheduleService } from "../services/week-schedule.service";
import { createWeekScheduleDto } from "../dtos/create-week-schedule.dto";

export const WeekScheduleController = new Hono();

WeekScheduleController.use(authMiddleware);

WeekScheduleController.get("/", async (c) => {
  const applications = await WeekScheduleService.findAll();

  return c.json(applications);
});

WeekScheduleController.get("/:id", async (c) => {
  const { id } = c.req.param();

  const application = await WeekScheduleService.findSpecific(id);

  return c.json(application);
});

WeekScheduleController.get("/:appId", async (c) => {
  const { appId } = c.req.param();

  const application = await WeekScheduleService.findByProject(appId);

  return c.json(application);
});

WeekScheduleController.post(
  "/",
  zValidator("json", createWeekScheduleDto),
  async (c) => {
    const dto = c.req.valid("json");

    const application = await WeekScheduleService.create(dto);

    return c.json(application);
  }
);
