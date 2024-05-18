import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import { ApplicationController } from "./controllers/application.controller";
import { authMiddleware } from "./middlewares/auth.middleware";
import { WeekScheduleController } from "./controllers/week-schedule.controller";

const app = new Hono();

app.use("/*", cors());
app.use(clerkMiddleware());
app.use(logger());
app.use(authMiddleware);

app.get("/", async (c) => {
  return c.json({ message: "Hello, World!" });
});

app.route("/applications", ApplicationController);
app.route("/week-schedules", WeekScheduleController);

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
