import { DataTypes } from "sequelize";
import {
  TokeInstance,
  UserActionsInstance,
  UserClienInstance,
} from "./../interfaces/user";

import { sequelize } from "../db";
import { UserClient, UserMod } from "./User";

export const Token = sequelize.define<TokeInstance>(
  "Token",
  {
    user: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    refresh_token: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
  },
  {}
);
export const UserActions = sequelize.define<UserActionsInstance>(
  "UserActions",
  {
    id_user: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    actions: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
  },
  {}
);
// UserClient.belongsTo(Token);
// UserMod.belongsTo(Token);
