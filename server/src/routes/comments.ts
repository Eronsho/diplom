import { commentsService } from ".././service/comments-service";
import express, { NextFunction } from "express";
import { Request, Response } from "express";
import { nextTick } from "process";
export let router = express.Router();
router.post(
  "/project/comment",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idUser, idProject, namePole, text } = req.body;
      console.log(idUser, idProject, namePole, text);
      const comment = await commentsService.addComent(
        idUser,
        idProject,
        namePole,
        text
      );
      return res.status(200).send(comment);
    } catch (error) {
      console.log(error);
    }
  }
);
