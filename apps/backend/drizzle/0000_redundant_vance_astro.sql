CREATE TABLE IF NOT EXISTS "applications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"time_slot" text NOT NULL,
	"created_by" text NOT NULL,
	"created_at" date DEFAULT 'now()' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "daily_schedules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"week_schedule_id" uuid NOT NULL,
	"day" text NOT NULL,
	"start_time" text NOT NULL,
	"end_time" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "weekly_schedules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"available_days" text[] NOT NULL,
	"extra_days" text[],
	"application_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "daily_schedules" ADD CONSTRAINT "daily_schedules_week_schedule_id_weekly_schedules_id_fk" FOREIGN KEY ("week_schedule_id") REFERENCES "public"."weekly_schedules"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "weekly_schedules" ADD CONSTRAINT "weekly_schedules_application_id_applications_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."applications"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
