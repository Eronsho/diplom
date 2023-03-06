import { DataTypes } from "sequelize";
import { UserClienInstance, UserModInstance } from "./../interfaces/user";

import { sequelize } from "../db";

export const UserMod = sequelize.define<UserModInstance>(
  "UserMod",
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    full_name: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    role: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    post: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: true,
      type: DataTypes.TEXT,
      unique: true,
    },
    password: { allowNull: true, type: DataTypes.TEXT },
    isActivated: { allowNull: true, type: DataTypes.BOOLEAN },
    activationLink: { allowNull: true, type: DataTypes.TEXT },
  },
  {}
);

export const UserClient = sequelize.define<UserClienInstance>("UserClient", {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: false,
  },
  full_name: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  role: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  contract: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  email: {
    allowNull: true,
    type: DataTypes.TEXT,
    unique: true,
  },
  password: { allowNull: true, type: DataTypes.TEXT },
  isActivated: { allowNull: true, type: DataTypes.BOOLEAN },
  activationLink: { allowNull: true, type: DataTypes.TEXT },
});
