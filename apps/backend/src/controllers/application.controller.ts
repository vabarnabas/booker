import { getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.middleware";
import { ApplicationService } from "../services/application.service";
import { zValidator } from "@hono/zod-validator";
import { createApplicationWithScheduleDto } from "../dtos/create-application-with-schedule.dto";

export const ApplicationController = new Hono();

ApplicationController.use(authMiddleware);

ApplicationController.get("/", async (c) => {
  const applications = await ApplicationService.findAll();

  return c.json(applications);
});

ApplicationController.get("/me", async (c) => {
  const auth = getAuth(c);

  const applications = await ApplicationService.findAllByUser(auth!.userId!);

  return c.json(applications);
});

ApplicationController.get("/:id", async (c) => {
  const { id } = c.req.param();

  const application = await ApplicationService.findSpecific(id);

  return c.json(application);
});

ApplicationController.post(
  "/",
  zValidator("json", createApplicationWithScheduleDto),
  async (c) => {
    const dto = c.req.valid("json");

    const application = await ApplicationService.createWithSchedule(dto);

    return c.json(application);
  }
);

ApplicationController.put(
  "/:id",
  zValidator("json", createApplicationWithScheduleDto),
  async (c) => {
    const { id } = c.req.param();
    const dto = c.req.valid("json");

    const application = await ApplicationService.updateWithSchedule(id, dto);

    return c.json(application);
  }
);
