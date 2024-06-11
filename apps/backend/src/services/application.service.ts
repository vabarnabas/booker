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

  static async getTimeSlots(id: string, date: string, day: string) {
    const application = await prisma.application.findUnique({
      where: { id },
      include: {
        dailySchedules: { where: { applicationId: id, day } },
        appointment: {
          where: {
            applicationId: id,
            date,
          },
          select: { time: true },
        },
      },
    });

    const start = application!.dailySchedules[0].startTime
      .split(":")
      .map(Number);
    const end = application!.dailySchedules[0]!.endTime.split(":").map(Number);

    const startDate = new Date();
    startDate.setHours(start[0], start[1], 0, 0);
    const endDate = new Date();
    endDate.setHours(end[0], end[1], 0, 0);

    const diffInMinutes = (endDate.getTime() - startDate.getTime()) / 60000;
    const intervals = Math.floor(
      diffInMinutes / parseInt(application!.timeSlot)
    );

    const everyTimeSlot = Array.from({ length: intervals + 1 }, (_, i) => {
      const date = new Date(
        startDate.getTime() + i * parseInt(application!.timeSlot) * 60000
      );
      return date.toTimeString().split(" ")[0].substring(0, 5);
    });

    const reservedTimeSlots = application!.appointment.map((a) => a.time);

    return everyTimeSlot.filter((t) => !reservedTimeSlots.includes(t));
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
