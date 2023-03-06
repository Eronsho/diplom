import {
  DescriptionModulFrontType,
  DescriptionModulType,
} from "./../interfaces/role";
import { sequelize } from "../db";
import { DescriptionModul, Modul } from "../models/description";
import {
  DataType,
  DataTypes,
  Model,
  ModelAttributeColumnOptions,
  Sequelize,
  where,
} from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { parseJsonText } from "typescript";
import {
  SetDocuments,
  UserModViews,
  VerificationStatus,
} from ".././models/project";
import { DATE } from "sequelize";
import { VerificationStatusAttributes } from "../interfaces/project";
interface descriptionModulAll {
  dbSettings: DescriptionModulType;
  frontSettings: DescriptionModulFrontType;
}
interface project {
  id?: string;
  id_user?: string;
  id_modul: string;
}
class ProjectService {
  async addModulProject(
    idModul: string,
    idUser: string,
    project: project,

    files:
      | { [fieldname: string]: Express.Multer.File[] }
      | Express.Multer.File[]
  ) {
    try {
      const decModul = await Modul.findOne({
        where: { id: idModul },
      });
      console.log(decModul);
      const queryInterface = sequelize.getQueryInterface();
      const newId = uuidv4();
      const status = await this.addVerificationStatus(newId);
      let date = new DATE();
      project.id = newId;
      project.id_user = idUser;
      project.id_modul = idModul;
      const testsas = await queryInterface.bulkInsert(`${decModul.name_bd}s`, [
        project,
      ]);

      if (Array.isArray(files)) {
        files.forEach((e) => {
          const setDocuments = SetDocuments.create({
            id: uuidv4(),
            id_project: newId,
            name: e.filename,
            url: e.path,
            allow_null: e.fieldname === "fale" ? true : false,
          });
        });
      }
      return project;
    } catch (error) {
      console.log(error);
      console.log(project);
    }
  }

  async getAllProjectModul(name_bd: string) {
    try {
      const queryInterface = sequelize.getQueryInterface();
      const project = sequelize.define(name_bd, {});
      const tests = await queryInterface.select(project, `${name_bd}s`, {});

      // const documents = await SetDocuments.findAll({
      //   where: { id_project: tests[0].id },
      // });
      return [...tests];
    } catch (error) {
      console.log(error);
    }
  }
  async getOneProjectModul(idModul: string, idProject: string) {
    try {
      const decModul = await Modul.findOne({
        where: { id: idModul },
      });
      const userModViews = await UserModViews.findOne({
        where: { id_user: "05ec1f1c-d8c4-4bd6-8364-3ece70c8ed18" },
      });
      if (!userModViews) {
        const user_mod_views = UserModViews.create({
          id: uuidv4(),
          id_project: idProject,
          id_user: "05ec1f1c-d8c4-4bd6-8364-3ece70c8ed18",
        });
      }
      const queryInterface = sequelize.getQueryInterface();
      const project = sequelize.define(`${decModul.name_bd}s`, {
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: DataTypes.UUID,
          unique: false,
        },
      });

      const projectOne = await queryInterface.select(
        project,
        `${decModul.name_bd}s`,
        { where: { id: idProject } }
      );

      const documents = await SetDocuments.findAll({
        where: { id_project: idProject },
      });

      return { project: projectOne[0], documents };
    } catch (error) {
      console.log(error);
    }
  }
  async addVerificationStatus(idProject: string) {
    const newId = uuidv4();
    const status = VerificationStatus.create({
      id: newId,
      id_project: idProject,
      received: true,
    });
  }
  async updateVerificationStatus(status: VerificationStatusAttributes) {
    const updateStatus = VerificationStatus.update(status, {
      where: { id: status.id },
    });
  }
}
const projectService = new ProjectService();
export { projectService };
