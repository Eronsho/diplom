import { Alert } from "../models/alert";
import { UserClient } from "../models/User";
import { Response, Request, NextFunction } from "express";

import { v4 as uuidv4 } from "uuid";
import { mailService } from "./mail-service";
import { Comment } from ".././models/project";
class CommentsService {
  async addComent(
    idUser: string,
    idProject: string,
    namePole: string,
    text: string
  ) {
    const id = uuidv4();
    const coment = await Comment.create({
      id,
      id_user: idUser,
      id_project: idProject,
      name_pole: namePole,
      text,
    });
    const alert = await Alert.create({
      id,
      id_user: idUser,
      info: text && text,
    });
    const user = await UserClient.findByPk(idUser);
    mailService.sendCommentUser(
      user.email,
      `${"http://localhost:8000"}`,
      namePole,
      text
    );
    return alert;
  }
  async getComent(id: string) {
    const coment = await Comment.findOne({
      where: { id },
    });

    return coment;
  }
  async getAllComent(idProject: string) {
    const coments = await Comment.findAll({
      where: { id_project: idProject },
    });

    return coments;
  }
  async fixedComent(id: string) {
    const coment = await Comment.findOne({
      where: { id },
    });
    coment.fixed = true;
    coment.save();
    return coment;
  }
  async removeComent(id: string) {
    const coment = await Comment.destroy({
      where: { id },
    });
    return coment;
  }
}
const commentsService = new CommentsService();
export { commentsService };
