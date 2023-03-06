import { AbstractDataType, DateDataType, Model } from "sequelize";
import { Optional } from "sequelize";

export interface ContractAttributes {
  id: string;
  contract: number;
  data: string;
  organization_fullname: string;
  phone_number: number;
  director_fullname: string;
  user_fullname: string;
  organization_inn: number;
  organization_ogrn: number;
  baced_doc: string;
  address: string;
}

interface ContractModulCreationAttributes
  extends Optional<ContractAttributes, "id"> {}
export interface ContractInstance
  extends Model<ContractAttributes, ContractModulCreationAttributes>,
    ContractAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
