import { DataTypes } from "sequelize";
import { AlertInstance } from "./../interfaces/alert";
import { sequelize } from "../db";

export const Alert = sequelize.define<AlertInstance>("Alert", {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true,
  },
  id_user: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: false,
  },
  status_viewed: {
    allowNull: true,
    defaultValue: false,
    type: DataTypes.TEXT,
  },
  info: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
});
