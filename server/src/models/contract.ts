import { DataTypes } from "sequelize";
import { UserClienInstance, UserModInstance } from "./../interfaces/user";

import { sequelize } from "../db";
import { ContractInstance } from "../interfaces/contract";

export const ContractClient = sequelize.define<ContractInstance>(
  "ContractClient",
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    contract: {
      allowNull: false,
      type: DataTypes.NUMBER,
      primaryKey: true,
      unique: true,
    },
    data: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    organization_fullname: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    phone_number: { allowNull: true, type: DataTypes.NUMBER },
    director_fullname: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    user_fullname: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    organization_inn: { allowNull: true, type: DataTypes.NUMBER },
    organization_ogrn: { allowNull: true, type: DataTypes.NUMBER },
    baced_doc: { allowNull: true, type: DataTypes.TEXT },
    address: { allowNull: true, type: DataTypes.TEXT },
  },
  {}
);
