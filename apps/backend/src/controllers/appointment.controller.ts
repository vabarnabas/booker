import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.middleware";
import { AppointmentService } from "../services/appointment.service";
import { createAppointmentDto } from "../dtos/create-appointment.dto";
import { zValidator } from "@hono/zod-validator";

export const AppointmentController = new Hono();

AppointmentController.use(authMiddleware);

AppointmentController.get("/", async (c) => {
  const appointments = await AppointmentService.findAll();

  return c.json(appointments);
});

AppointmentController.get("/:id", async (c) => {
  const { id } = c.req.param();

  const appointment = await AppointmentService.findSpecific(id);

  return c.json(appointment);
});

AppointmentController.get("/application/:id", async (c) => {
  const { id } = c.req.param();

  const application = await AppointmentService.findAllByApplication(id);

  return c.json(application);
});

AppointmentController.post(
  "/",
  zValidator("json", createAppointmentDto),
  async (c) => {
    const dto = c.req.valid("json");

    const appointment = await AppointmentService.create(dto);

    return c.json(appointment);
  }
);
