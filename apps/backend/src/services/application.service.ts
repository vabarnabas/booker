import { eq } from "drizzle-orm";
import { db } from "../db/db";
import {
  Application,
  applications,
  dailySchedules,
  weeklySchedules,
} from "../db/schema";
import { CreateApplicationWithScheduleDto } from "../dtos/create-application-with-schedule.dto";

export class ApplicationService {
  static async findAll() {
    return await db
      .select()
      .from(applications)
      .leftJoin(
        weeklySchedules,
        eq(applications.id, weeklySchedules.applicationId)
      )
      .leftJoin(
        dailySchedules,
        eq(weeklySchedules.id, dailySchedules.weekScheduleId)
      );
  }

  static async findSpecific(id: string) {
    return await db.query.applications.findFirst({
      where: eq(applications.id, id),
      with: {
        weeklySchedules: {
          with: {
            dailySchedules: true,
          },
        },
      },
    });
  }

  static async findAllByUser(userId: string) {
    return await db.query.applications.findMany({
      where: eq(applications.createdBy, userId),
      with: {
        weeklySchedules: {
          with: {
            dailySchedules: true,
          },
        },
      },
    });
  }

  static async createWithSchedule(dto: CreateApplicationWithScheduleDto) {
    let createdApplication: Application = {} as Application;
    db.transaction(async (tx) => {
      const [app] = await tx
        .insert(applications)
        .values({
          name: dto.name,
          createdBy: dto.createdBy,
          timeSlot: dto.timeSlot,
        })
        .returning();
      const [{ id: weeklyScheduleId }] = await tx
        .insert(weeklySchedules)
        .values({
          applicationId: app.id,
          availableDays: dto.weeklySchedule.availableDays,
        })
        .returning();
      await tx.insert(dailySchedules).values(
        dto.dailySchedule.map((ds) => ({
          ...ds,
          weekScheduleId: weeklyScheduleId,
        }))
      );
      createdApplication = app;
    });
    return createdApplication;
  }
}
