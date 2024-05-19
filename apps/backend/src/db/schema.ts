import { relations } from "drizzle-orm";
import { date, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const applications = pgTable("applications", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  timeSlot: text("time_slot").notNull(),
  createdBy: text("created_by").notNull(),
  createdAt: date("created_at").notNull().default("now()"),
});

export const applicationRelations = relations(applications, ({ one }) => ({
  weeklySchedules: one(weeklySchedules, {
    fields: [applications.id],
    references: [weeklySchedules.applicationId],
  }),
}));

export const weeklySchedules = pgTable("weekly_schedules", {
  id: uuid("id").defaultRandom().primaryKey(),
  availableDays: text("available_days").array().notNull(),
  extraDays: text("extra_days").array(),
  applicationId: uuid("application_id")
    .notNull()
    .references(() => applications.id, { onDelete: "cascade" }),
});

export const weeklyScheduleRelations = relations(
  weeklySchedules,
  ({ one, many }) => ({
    application: one(applications, {
      fields: [weeklySchedules.applicationId],
      references: [applications.id],
    }),
    dailySchedules: many(dailySchedules),
  })
);

export const dailySchedules = pgTable("daily_schedules", {
  id: uuid("id").defaultRandom().primaryKey(),
  weekScheduleId: uuid("week_schedule_id")
    .notNull()
    .references(() => weeklySchedules.id, { onDelete: "cascade" }),
  day: text("day").notNull(),
  startTime: text("start_time").notNull(),
  endTime: text("end_time").notNull(),
});

export const dailyScheduleRelations = relations(dailySchedules, ({ one }) => ({
  dailySchedules: one(weeklySchedules, {
    fields: [dailySchedules.weekScheduleId],
    references: [weeklySchedules.id],
  }),
}));

export type Application = typeof applications.$inferSelect;
export type WeeklySchedule = typeof weeklySchedules.$inferSelect;
export type DailySchedule = typeof dailySchedules.$inferSelect;
