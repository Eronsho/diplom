import { contractService } from "../service/contract-service";
import express, { NextFunction } from "express";
import { Request, Response } from "express";
import { nextTick } from "process";
export let router = express.Router();
router.post(
  "/api/contract",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contract = req.body;
      const addNewContract = contractService.addContract(contract);
      // console.log(addNewContract);
      return res.status(200).send(addNewContract);
    } catch (e) {
      res.send(e);
    }
  }
);
router.put(
  "/contract",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, field, value } = req.body;
      const addNewContract = contractService.changeContract(id, field, value);
      return res.status(200).send(addNewContract);
    } catch (e) {
      next(e);
    }
  }
);
