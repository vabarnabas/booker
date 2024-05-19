import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { applications, weeklySchedules } from "../db/schema";
import { CreateWeekScheduleDto } from "../dtos/create-week-schedule.dto";

export class WeekScheduleService {
  static async findAll() {
    return await db.select().from(weeklySchedules);
  }

  static async findSpecific(id: string) {
    return await db
      .select()
      .from(weeklySchedules)
      .where(eq(applications.id, id));
  }

  static async findByProject(applicationId: string) {
    return await db
      .select()
      .from(weeklySchedules)
      .where(eq(weeklySchedules.applicationId, applicationId));
  }

  static async create(dto: CreateWeekScheduleDto) {
    return await db.insert(weeklySchedules).values(dto);
  }
}
