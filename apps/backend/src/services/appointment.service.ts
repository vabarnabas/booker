import { prisma } from "../../prisma";
import voucher_codes from "voucher-code-generator";
import { CreateAppointmentDto } from "../dtos/create-appointment.dto";

export class AppointmentService {
  static async findAll() {
    return await prisma.appointment.findMany();
  }

  static async findSpecific(id: string) {
    return await prisma.appointment.findFirst({
      where: { OR: [{ id: id }, { externalId: id }] },
    });
  }

  static async findAllByApplication(applicationId: string) {
    return await prisma.appointment.findMany({
      where: { applicationId },
    });
  }

  static async create(dto: CreateAppointmentDto) {
    const [externalId] = voucher_codes.generate({
      length: 8,
      prefix: "BOOK",
      postfix: `${new Date().getTime()}`,
      charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
    });

    return await prisma.appointment.create({
      data: { ...dto, externalId, status: "created" },
    });
  }
}
