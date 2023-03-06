import { Model } from "sequelize";
import { Optional } from "sequelize";

interface ProjectAttributes {
  id: string;
  date: Date;
  id_user: string;
  organization_fullname: string;
  organization_inn: number;
  organization_ogrn: number;
  address: string;
  phone_number: number;
  director_fullname: string;
  user_fullname: string;
  type_work: string;
  object: string;
  address_object: string;
  location: string;
  purpose_use: string;
  requested_law: string;
  verification__status: string;
}
// ---------------------------------------------------------------------
interface SelectAttributes {
  id: string;
  value: string;
}
// ---------------------------------------------------------------------
interface ModulSelectAttributes {
  id: string;
  id_select: string;
  id_modul: string;
  id_frontSettings: string;
}
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
interface SetDocumentsAttributes {
  id_project: string;
  id: string;
  name: string;
  url: string;
  allow_null: boolean;
}
// ---------------------------------------------------------------------
export interface VerificationStatusAttributes {
  id: string;
  id_project: string;
  date: Date;
  received: boolean;
  verified: boolean;
  waiting_fix: boolean;
  frozi: boolean;
}
// ---------------------------------------------------------------------
interface UserModViewsAttributes {
  id_project: string;
  id: string;
  id_user: string;
}
// ---------------------------------------------------------------------
interface CommentAttributes {
  id: string;
  id_project: string;
  id_user: string;
  name_pole: string;
  text: string;
  fixed: boolean;
}
// ---------------------------------------------------------------------
interface ProjectModulCreationAttributes
  extends Optional<ProjectAttributes, "id"> {}
export interface ProjectInstance
  extends Model<ProjectAttributes, ProjectModulCreationAttributes>,
    ProjectAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
// ---------------------------------------------------------------------
interface SelectModulCreationAttributes
  extends Optional<SelectAttributes, "id"> {}
export interface SelectInstance
  extends Model<SelectAttributes, SelectModulCreationAttributes>,
    SelectAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
// ---------------------------------------------------------------------
interface SetDocumentsModulCreationAttributes
  extends Optional<SetDocumentsAttributes, "id"> {}
export interface SetDocumentsInstance
  extends Model<SetDocumentsAttributes, SetDocumentsModulCreationAttributes>,
    SetDocumentsAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
// ---------------------------------------------------------------------
interface VerificationStatusModulCreationAttributes
  extends Optional<VerificationStatusAttributes, "id"> {}
export interface VerificationStatusInstance
  extends Model<
      VerificationStatusAttributes,
      VerificationStatusModulCreationAttributes
    >,
    VerificationStatusAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
// ---------------------------------------------------------------------
interface UserModViewsModulCreationAttributes
  extends Optional<UserModViewsAttributes, "id"> {}
export interface UserModViewsInstance
  extends Model<UserModViewsAttributes, UserModViewsModulCreationAttributes>,
    UserModViewsAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
// ---------------------------------------------------------------------
interface CommentModulCreationAttributes
  extends Optional<CommentAttributes, "id"> {}
export interface CommentInstance
  extends Model<CommentAttributes, CommentModulCreationAttributes>,
    CommentAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
// ---------------------------------------------------------------------
interface ModulSelectCreationAttributes
  extends Optional<ModulSelectAttributes, "id"> {}
export interface ModulSelectInstance
  extends Model<ModulSelectAttributes, ModulSelectCreationAttributes>,
    ModulSelectAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
