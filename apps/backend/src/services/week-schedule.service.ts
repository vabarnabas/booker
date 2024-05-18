import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { applications, weekSchedules } from "../db/schema";
import { CreateWeekScheduleDto } from "../dtos/create-week-schedule.dto";

export class WeekScheduleService {
  static async findAll() {
    return await db.select().from(weekSchedules);
  }

  static async findSpecific(id: string) {
    return await db.select().from(weekSchedules).where(eq(applications.id, id));
  }

  static async findByProject(applicationId: string) {
    return await db
      .select()
      .from(weekSchedules)
      .where(eq(weekSchedules.applicationId, applicationId));
  }

  static async create(dto: CreateWeekScheduleDto) {
    return await db.insert(weekSchedules).values(dto);
  }
}
