import { selectService } from ".././service/select-service";
import express, { NextFunction } from "express";
import { Request, Response } from "express";
export let router = express.Router();
type FormSelectAddValues = {
  select: {
    id: number;
    value: string | number;
  }[];
};
router.post(
  "/api/select",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { select } = req.body;
      const selects = select.forEach(async (e) => {
        const purposeUse = await selectService.addSelect(e.value);
      });
      res.status(200).send(selects);
    } catch (e) {
      next(e);
    }
  }
);
router.get(
  "/api/selects",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const selects = await selectService.getAllSelect();
      res.status(200).send(selects);
    } catch (e) {
      next(e);
      console.log(e);
    }
  }
);
router.get(
  "/api/select",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      const selects = await selectService.getOneSelect(id);
      res.status(200).send(selects);
    } catch (e) {
      next(e);
      console.log(e);
    }
  }
);
