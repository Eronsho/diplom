import multer from "multer";
import express, { NextFunction } from "express";
import { Request, Response } from "express";
import { projectService } from "../service/project-service";
import { upload } from "../config/multer";
import { alertService } from "../service/alert-service";
export let router = express.Router();
const uploadMultiple = upload.any();
router.post(
  "/api/modul/project",
  uploadMultiple,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idModul, idUser, project } = req.body;
      const obj = JSON.parse(project);
      const files = req.files;
      const projects = await projectService.addModulProject(
        idModul,
        idUser,
        obj,
        files
      );
      return res.status(200).send({ files, obj, projects });
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  "/api/modul/projects",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idModul } = req.body;
      const project = await projectService.getAllProjectModul(idModul);
      return res.status(200).send(project);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  "/api/project",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idModul, idProject } = req.body;
      const project = await projectService.getOneProjectModul(
        idModul,
        idProject
      );
      return res.status(200).send(project);
    } catch (error) {
      next(error);
    }
  }
);
router.put(
  "/project/status",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const status = req.body;
      const updateprojectStatus = await projectService.updateVerificationStatus(
        status
      );
      return res.status(200).send(updateprojectStatus);
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  "/alert",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      const alert = await alertService.getAlert(id);
      return res.status(200).send(alert);
    } catch (error) {
      next(error);
    }
  }
);
