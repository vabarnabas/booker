import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { applications } from "../db/schema";
import { CreateApplicationDto } from "../dtos/create-application.dto";

export class ApplocationService {
  static async findAll() {
    return await db.select().from(applications);
  }

  static async findSpecific(id: string) {
    return await db.select().from(applications).where(eq(applications.id, id));
  }

  static async findAllByUser(userId: string) {
    return await db
      .select()
      .from(applications)
      .where(eq(applications.createdBy, userId));
  }

  static async create(dto: CreateApplicationDto) {
    return await db.insert(applications).values(dto).returning();
  }
}
