import {
  DescriptionModulFrontType,
  DescriptionModulType,
} from "./../interfaces/role";
import { DescriptionModulFront } from "./../models/description";
import { sequelize } from "../db";
import { DescriptionModul, Modul } from "../models/description";
import { Response, Request, NextFunction } from "express";
import {
  DataTypes,
  Model,
  ModelAttributeColumnOptions,
  Sequelize,
  where,
} from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { parseJsonText } from "typescript";
import { UUID } from "sequelize";
import path from "path";
import { SelectAll, SelectModulInput, SetDocuments } from ".././models/project";
import { selectService } from "./select-service";
type date = {
  id: number;
  value: string;
};
interface descriptionModulAll {
  dbSettings: DescriptionModulType;
  frontSettings: DescriptionModulFrontType;
  selects: { select: date }[];
}
class ModelService {
  async addModel(
    name_front: string,
    name_bd: string,
    description: descriptionModulAll[]
  ) {
    const id = uuidv4();
    var id_modul = id;
    const model = await Modul.create({ id, name_front, name_bd });
    description.forEach((e) => {
      const id = uuidv4();
      var id_frontSettings = id;
      e.dbSettings.id = id;
      e.dbSettings.id_modul = id_modul;
      e.frontSettings.id = id;
      e.frontSettings.id_modul = id_modul;
      e.frontSettings.name_bd = e.dbSettings.name;

      e.selects.forEach(async (e) => {
        const Select = await SelectAll.findOne({
          where: { value: e.select.value },
        });
        if (Select !== null) {
          let newId = uuidv4();
          const newSelectModulInput = {
            id: newId,
            id_select: Select.id,
            id_frontSettings: id_frontSettings,
            id_modul: id_modul,
          };
          const SelectModulInputs =
            SelectModulInput.create(newSelectModulInput);
        } else {
        }
      });
      const descriptionModulDb = DescriptionModul.create(e.dbSettings);
      const descriptionModulFronts = DescriptionModulFront.create(
        e.frontSettings
      );
    });
    const descriptionModel = await DescriptionModul.findAll({
      where: { id_modul },
    });
    try {
      const project = sequelize.define(name_bd, {
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: DataTypes.UUID,
          unique: true,
        },
        id_modul: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: DataTypes.UUID,
          unique: false,
        },
        id_user: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: DataTypes.UUID,
          unique: false,
        },
        createdAt: {
          type: "TIMESTAMP",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        updatedAt: {
          type: "TIMESTAMP",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
      });
      await project.sync();
    } catch (error) {
      console.log(error);
    }

    const queryInterface = sequelize.getQueryInterface();
    description.forEach((e) => {
      e.frontSettings.input_type !== "fale"
        ? queryInterface.addColumn(`${name_bd}s`, e.dbSettings.name, {
            type: e.dbSettings.type,
            allowNull: e.dbSettings.allowNull,
          })
        : "";
    });
    return { model, descriptionModel };
  }
  async getAllModul() {
    const Moduls = await Modul.findAll({});
    return Moduls;
  }
  async getOneModul(id: string) {
    const Moduls = await Modul.findOne({ where: { id } });
    return Moduls;
  }
  async getAllModulDescription() {
    const descriptionModelBd = await DescriptionModul.findAll();
    const descriptionModelFront = await DescriptionModulFront.findAll();
    return {
      dbSettings: descriptionModelBd,
      frontSettings: descriptionModelFront,
    };
  }
  async getOneModulDescription(id_modul: string) {
    const descriptionModelBd = await DescriptionModul.findAll({
      where: { id_modul },
    });
    const descriptionModelFront = await DescriptionModulFront.findAll({
      where: { id_modul },
    });
    let descriptionModelFronts = await Promise.all(
      descriptionModelFront.map(async (e) => {
        const SelectId = await SelectModulInput.findAll({
          where: { id_frontSettings: e.id },
        });

        const Selects = await Promise.all(
          SelectId.map(async (e) => {
            let selects = await SelectAll.findOne({
              where: { id: e.id_select },
            });
            return selects;
          })
        );
        e.select = Selects;
        return e;
      })
    );
    console.log();

    return {
      dbSettings: descriptionModelBd,
      frontSettings: descriptionModelFronts,
    };
  }
}
const modelService = new ModelService();
export { modelService };
