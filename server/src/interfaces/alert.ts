import { Model } from "sequelize";
import { Optional } from "sequelize";

interface AlertAttributes {
  id: string;
  id_user: string;
  status_viewed: boolean;
  info: string;
}

interface alertCreationAttributes extends Optional<AlertAttributes, "id"> {}

export interface AlertInstance
  extends Model<AlertAttributes, alertCreationAttributes>,
    AlertAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
