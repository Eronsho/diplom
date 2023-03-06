import { BuildOptions, DataTypes, Model, Optional, Sequelize } from "sequelize";
import { Options } from "sequelize";

interface UserModAttributes {
  id: string;
  email: string;
  password: string;
  full_name: string;
  post: string;
  role: string;
  isActivated: boolean;
  activationLink: string;
}
export interface UserClientAttributes {
  id: string;
  email: string;
  password: string;
  full_name: string;
  contract: number;
  role: string;
  isActivated: boolean;
  activationLink: string;
}
interface TokenAttributes {
  user: string;
  refresh_token: string;
}
interface UserActionsAttributes {
  id_user: string;
  actions: string;
}
interface UserModCreationAttributes extends Optional<UserModAttributes, "id"> {}
interface UserClienCreationAttributes
  extends Optional<UserClientAttributes, `id`> {}
interface UserActionsCreationAttributes
  extends Optional<UserActionsAttributes, "id_user"> {}

export interface UserModInstance
  extends Model<UserModAttributes, UserModCreationAttributes>,
    UserModAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface UserClienInstance
  extends Model<UserClientAttributes, UserClienCreationAttributes>,
    UserClientAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface TokeInstance extends Model<TokenAttributes>, TokenAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserActionsInstance
  extends Model<UserActionsAttributes, UserActionsCreationAttributes>,
    UserActionsAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export type TokensStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): TokeInstance;
};
export class Token extends Model<TokenAttributes> {}
export function TokensFactory(sequelize: Sequelize): TokensStatic {
  return <TokensStatic>sequelize.define("UserActions", {
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
  });
}
