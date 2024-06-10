import { CreateApplicationWithScheduleDto } from "../dtos/create-application-with-schedule.dto";
import { prisma } from "../../prisma";

export class ApplicationService {
  static async findAll() {
    return await prisma.application.findMany();
  }

  static async findSpecific(id: string) {
    return await prisma.application.findUnique({
      where: { id },
      include: { dailySchedules: true },
    });
  }

  static async findAllByUser(userId: string) {
    return await prisma.application.findMany({ where: { createdBy: userId } });
  }

  static async createWithSchedule(dto: CreateApplicationWithScheduleDto) {
    const { dailySchedules, ...applicationDto } = dto;

    return await prisma.application.create({
      data: {
        ...applicationDto,
        dailySchedules: {
          createMany: {
            data: dailySchedules,
          },
        },
      },
    });
  }

  static async updateWithSchedule(
    id: string,
    dto: CreateApplicationWithScheduleDto
  ) {
    const { dailySchedules, ...applicationDto } = dto;

    return await prisma.$transaction(async (tx) => {
      await tx.dailySchedule.deleteMany({
        where: { applicationId: id },
      });

      return await tx.application.update({
        where: { id },
        data: {
          ...applicationDto,
          dailySchedules: {
            createMany: {
              data: dailySchedules,
            },
          },
        },
      });
    });
  }
}
