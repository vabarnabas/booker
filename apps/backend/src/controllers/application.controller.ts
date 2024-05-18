import { getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.middleware";
import { db } from "../db/db";
import { applications as applicationsTable } from "../db/schema";
import { eq } from "drizzle-orm";
import { ApplocationService } from "../services/application.service";
import { zValidator } from "@hono/zod-validator";
import { createApplicationDto } from "../dtos/create-application.dto";

export const ApplicationController = new Hono();

ApplicationController.use(authMiddleware);

ApplicationController.get("/", async (c) => {
  const applications = await ApplocationService.findAll();

  return c.json(applications);
});

ApplicationController.get("/:id", async (c) => {
  const { id } = c.req.param();

  const application = await ApplocationService.findSpecific(id);

  return c.json(application);
});

ApplicationController.get("/me", async (c) => {
  const auth = getAuth(c);

  const applications = await ApplocationService.findAllByUser(auth!.userId!);

  return c.json(applications);
});

ApplicationController.post(
  "/",
  zValidator("json", createApplicationDto),
  async (c) => {
    const dto = c.req.valid("json");

    const applications = await ApplocationService.create(dto);

    if (!applications.length) {
      return c.json({ message: "Failed to create application" }, 500);
    }

    const application = applications[0];

    return c.json(application);
  }
);
