import express, { NextFunction } from "express";
import { Request, Response } from "express";
import { modelService } from "../service/modul-service";
import { projectService } from "../service/project-service";
export let router = express.Router();
router.get(
  "/modul/descriptions",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const table = await modelService.getAllModulDescription();
      return res.status(200).send(table);
    } catch (e) {
      next(e);
    }
  }
);
router.get(
  "/modul/description",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id_madul } = req.body;
      const table = await modelService.getOneModulDescription(id_madul);
      return res.status(200).send(table);
    } catch (e) {
      next(e);
    }
  }
);
router.get(
  "/api/moduls",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const modul = await modelService.getAllModul();
      const description = await modelService.getAllModulDescription();
      const projects = await Promise.all(
        modul.map(async (e) => {
          return await projectService.getAllProjectModul(e.name_bd);
        })
      );

      return res.status(200).send({ modul, description, projects });
    } catch (e) {
      next(e);
    }
  }
);
router.get(
  "/api/module:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      console.log("====================================");
      console.log(id);
      console.log("====================================");
      const modul = await modelService.getOneModul(id);
      const description = await modelService.getOneModulDescription(id);
      return res.status(200).send({ modul, description });
    } catch (e) {
      next(e);
    }
  }
);
router.post(
  "/api/module",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name_front, name_bd, description } = req.body;

      const project = await modelService.addModel(
        name_front,
        name_bd,
        description
      );
      return res.status(200).send({ project });
    } catch (error) {
      next(error);
    }
  }
);
