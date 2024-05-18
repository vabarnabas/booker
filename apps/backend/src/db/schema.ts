import { relations } from "drizzle-orm";
import { date, pgTable, text, uuid } from "drizzle-orm/pg-core";
import app from "..";
import { array } from "zod";

export const applications = pgTable("applications", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  createdBy: text("created_by").notNull(),
  createdAt: date("created_at").notNull().default("now()"),
});

export const weekSchedules = pgTable("week_schedules", {
  id: uuid("id").defaultRandom().primaryKey(),
  availableDays: text("available_days").array().notNull(),
  extraDays: text("extra_days").array(),
  applicationId: uuid("application_id")
    .notNull()
    .references(() => applications.id),
});

export type Application = typeof applications.$inferSelect;
export type WeekSchedule = typeof weekSchedules.$inferSelect;
