import { Router } from "express";
import LeadController from "./controllers/LeadsController";

const router = Router();

//Leads

router.get("/leads", LeadController.index);
router.get("/leads/:id", LeadController.show);
router.post("/leads", LeadController.save);
router.put("/leads/:id", LeadController.update);
router.delete("/leads/:id", LeadController.delete);
export { router };
