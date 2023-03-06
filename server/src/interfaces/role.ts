import { Model } from "sequelize";
import { Optional } from "sequelize";
import { ModulSelectInstance, SelectInstance } from "./project";

interface RoleAttributes {
  id: string;
  name: string;
  description: string;
}
interface modulAttributes {
  id: string;
  name_front: string;
  name_bd: string;
}
export interface DescriptionModulType {
  id: string;
  id_modul: string;
  name: string;
  allowNull: boolean;
  type: string;
}
type Select = {
  Selects: {
    id: string;
    value: string;
  };
};
export interface DescriptionModulFrontType {
  id: string;
  id_modul: string;
  name_front: string;
  input_type: string;
  name_bd: string;
  select: boolean | SelectInstance[];
}

interface roleCreationAttributes extends Optional<RoleAttributes, "id"> {}
interface modulCreationAttributes extends Optional<modulAttributes, "id"> {}
interface descriptionModulFrontAttributes
  extends Optional<DescriptionModulFrontType, "id"> {}
interface DescriptionModulCreationAttributes
  extends Optional<DescriptionModulType, "id"> {}
export interface RoleInstance
  extends Model<RoleAttributes, roleCreationAttributes>,
    RoleAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface DescriptionModulInstance
  extends Model<DescriptionModulType, DescriptionModulCreationAttributes>,
    DescriptionModulType {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface ModulInstance
  extends Model<modulAttributes, modulCreationAttributes>,
    DescriptionModulType {
  name_bd: any;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface DescriptionModulFrontInstance
  extends Model<
      descriptionModulFrontAttributes,
      descriptionModulFrontAttributes
    >,
    DescriptionModulFrontType {
  name_bd: any;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
