import { prisma } from "../database/index";
import { Prisma } from "@prisma/client";
import {
  LeadCreateInput,
  LeadUpdateInput,
  LeadWithDetails,
  Lead,
} from "../types/Lead";

//Classe
export class LeadModel {
  static async findAll(): Promise<LeadWithDetails[] | null> {
    return await prisma.lead.findMany({
      include: {
        groups: true,
        campaigns: { include: { campaign: true } },
      },
    });
  }
  static async create(dataLead: LeadCreateInput): Promise<Lead> {
    const newLead = await prisma.lead.create({
      data: dataLead,
    });
    return newLead;
  }
  static async findById(id: number): Promise<LeadWithDetails | null> {
    return await prisma.lead.findUnique({
      where: { id },
      include: {
        groups: true,
        campaigns: { include: { campaign: true } },
      },
    });
  }
  static async update(id: number, data: LeadUpdateInput): Promise<Lead> {
    data.updatedAt = new Date();
    return await prisma.lead.update({
      where: { id: id },
      data,
    });
  }
  static async delete(id: number): Promise<Lead> {
    return await prisma.lead.delete({
      where: { id },
    });
  }
}
