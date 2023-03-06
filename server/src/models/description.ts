import { DataTypes } from "sequelize";

import { sequelize } from "../db";
import {
  DescriptionModulFrontInstance,
  DescriptionModulInstance,
  ModulInstance,
  RoleInstance,
} from "../interfaces/role";

export const Role = sequelize.define<RoleInstance>("RoleUser", {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true,
  },
  name: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
});
export const Modul = sequelize.define<ModulInstance>("Modul", {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true,
  },

  name_front: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  name_bd: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
});
export const DescriptionModul = sequelize.define<DescriptionModulInstance>(
  "DescriptionModul",
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    id_modul: {
      allowNull: false,
      type: DataTypes.UUID,
      unique: false,
    },

    name: {
      allowNull: true,
      type: DataTypes.TEXT,
    },

    allowNull: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    type: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
  }
);
export const DescriptionModulFront =
  sequelize.define<DescriptionModulFrontInstance>("DescriptionModulFront", {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    id_modul: {
      allowNull: false,
      type: DataTypes.UUID,
      unique: false,
    },

    name_front: {
      allowNull: false,
      type: DataTypes.TEXT,
    },

    input_type: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    name_bd: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    select: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  });
{
}
