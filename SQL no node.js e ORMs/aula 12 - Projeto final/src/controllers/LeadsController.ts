import { NextFunction, Response, Request } from "express";
import { LeadModel } from "../models/LeadsModel";
import { Prisma } from "@prisma/client";
import { CreateLeadRequestSchema } from "./Schemas/LeadsRequestSchemas";

export class LeadController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const leads = await LeadModel.findAll();
      res.json(leads);
    } catch (error) {
      next(error);
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const targetLead = await LeadModel.findById(id);
      res.json(targetLead);
    } catch (error) {
      next(error);
    }
  }

  async save(req: Request, res: Response, next: NextFunction) {
    try {
      const newLead = req.body;
      console.log(`Novo lead: ${newLead}`);

      const createdLead: any = await LeadModel.create(newLead);

      res.json(createdLead);
    } catch (error) {
      next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const newData = CreateLeadRequestSchema.parse(
        CreateLeadRequestSchema.parse(req.body)
      );
      const updatedLead = await LeadModel.update(id, newData);
      console.log(typeof updatedLead);
      res.json(updatedLead);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const leadToDelete = await LeadModel.delete(id);
      res.json(leadToDelete);
    } catch (error) {
      next(error);
    }
  }
}
export default new LeadController();
