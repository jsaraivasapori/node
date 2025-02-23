//Types
import { Prisma } from "@prisma/client";
export const Prismaa = Prisma;
// Tipo básico do Lead (sem relações)
export type Lead = Prisma.LeadGetPayload<{}>;

// Lead com grupos associados
// export type LeadWithGroups = Prisma.LeadGetPayload<{
//   include: { groups: true };
// }>;

// Lead com todos os detalhes (grupos e campanhas)
export type LeadWithDetails = Prisma.LeadGetPayload<{
  include: {
    groups: true;
    campaigns: true;
  };
}>;

// Tipos para operações do Prisma
export type LeadCreateInput = Prisma.LeadCreateInput;
export type LeadUpdateInput = Prisma.LeadUpdateInput;
