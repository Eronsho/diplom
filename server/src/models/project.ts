import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../db";
import {
  CommentInstance,
  ModulSelectInstance,
  ProjectInstance,
  SelectInstance,
  SetDocumentsInstance,
  UserModViewsInstance,
  VerificationStatusInstance,
} from "../interfaces/project";

export const ProjectClient = sequelize.define<ProjectInstance>(
  "ProjectClient",
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },
    date: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    id_user: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },
    organization_fullname: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    organization_inn: { allowNull: true, type: DataTypes.TEXT },
    organization_ogrn: { allowNull: true, type: DataTypes.TEXT },

    address: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    phone_number: { allowNull: true, type: DataTypes.TEXT },
    director_fullname: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    user_fullname: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    type_work: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    object: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    address_object: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    location: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    purpose_use: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    requested_law: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    verification__status: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
  }
);
export const VerificationStatus = sequelize.define<VerificationStatusInstance>(
  "VerificationStatus",
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },
    id_project: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },
    date: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    received: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
    verified: { allowNull: true, type: DataTypes.BOOLEAN, defaultValue: false },
    waiting_fix: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    frozi: { allowNull: true, type: DataTypes.BOOLEAN, defaultValue: false },
  }
);
export const Comment = sequelize.define<CommentInstance>("Comment", {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: false,
  },
  id_project: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: false,
  },
  id_user: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: false,
  },
  name_pole: {
    allowNull: false,
    type: DataTypes.TEXT,
  },

  text: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  fixed: { allowNull: true, type: DataTypes.BOOLEAN },
});

export const SelectAll = sequelize.define<SelectInstance>("SelectAll", {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: false,
  },

  value: {
    allowNull: false,
    type: DataTypes.TEXT,
    unique: true,
  },
});
export const SelectModulInput = sequelize.define<ModulSelectInstance>(
  "SelectModulInput",
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },

    id_select: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },
    id_modul: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },
    id_frontSettings: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },
  }
);
export const SetDocuments = sequelize.define<SetDocumentsInstance>(
  "SetDocuments",
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },
    id_project: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },

    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },

    url: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    allow_null: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
  }
);
export const UserModViews = sequelize.define<UserModViewsInstance>(
  "UserModViews",
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },
    id_project: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },
    id_user: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: false,
    },
  }
);
