import { ProjectStateAttributes } from "./Project";

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
interface TypeWorkAttributes {
  id: string;
  name: string;
}
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
interface RoleAttributes {
  id: string;
  name: string;
  description: string;
}
interface modulAttributes {
  name_front: string;
  name_bd: string;
}
export enum TypeEnum {
  text = "text",
  number = "number",
  boolean = "boolean",
}
export enum InputTypeEnum {
  input = "input",
  select = "select",
  checkbox = "checkbox",
  fale = "fale",
}
interface modulType extends modulAttributes {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface DescriptionModulType {
  id: string;
  name: string;
  allowNull: boolean;
  type: TypeEnum;
}

export interface DescriptionModulFrontType {
  id: string;
  name_front: string;
  input_type: InputTypeEnum;
  select: boolean;
}
export interface DescriptionModulFrontPropsType {
  id: string;
  id_modul: string;
  name_bd: string;
  name_front: string;
  input_type: InputTypeEnum;
  select: boolean & date[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface DescriptionModulFront extends DescriptionModulFrontType {
  id_modul: string;
  name_bd: string;
}

interface DescriptionModulBd extends DescriptionModulType {
  id_modul: string;
}
interface ModulBdProject extends DescriptionModulFront {
  name_bd: string;
}
export interface ModuleProjectProps {
  name_front: string;
  name_bd: string;
  description: {
    dbSettings: DescriptionModulBd;
    frontSettings: ModulBdProject[];
    selects: { select: date }[];
  };
}
export interface ModuleAddProjectProps {
  modul: modulType;
  description: {
    dbSettings: DescriptionModulBd[];
    frontSettings: DescriptionModulFrontPropsType[];
  };
}

type description = {
  dbSettings: DescriptionModulBd;
  frontSettings: DescriptionModulFront;
};
type date = {
  id: number;
  value: string;
};
export interface ModuleAttributes {
  name_front: string;
  name_bd: string;
  description: {
    dbSettings: DescriptionModulType;
    frontSettings: DescriptionModulFrontType;
    selects: { select: date }[];
  }[];
}

export enum ModuleActionTypes {
  ADD_MODULE = "ADD_MODULE",
  ADD_MODULE_SUCCESSS = "ADD_MODULE_SUCCESSS",
  ADD_MODULE_ERROR = "ADD_MODULE_ERROR",
  FETCH_MODULE = "FETCH_MODULE",
  FETCH_MODULE_SUCCESSS = "FETCH_MODULE_SUCCESSS",
  FETCH_MODULE_ERROR = "FETCH_MODULE_ERROR",
  FETCH_ONE_MODULE = "FETCH_ONE_MODULE",
  FETCH_ONE_MODULE_ERROR = "FETCH_ONE_MODULE_ERROR",
  FETCH_ONE_MODULE_SUCCESSS = "FETCH_ONE_MODULE_SUCCESSS",
}

interface addModuleAction {
  type: ModuleActionTypes.ADD_MODULE;
  payload: ModuleAttributes;
}
interface addModuleSuccessAction {
  type: ModuleActionTypes.ADD_MODULE_SUCCESSS;
  payload: ModuleAttributes;
}
interface addModuleErrorAction {
  type: ModuleActionTypes.ADD_MODULE_ERROR;
  payload: string;
}
interface fetchModuleAction {
  type: ModuleActionTypes.FETCH_MODULE;
}
interface fetchModuleSuccessAction {
  type: ModuleActionTypes.FETCH_MODULE_SUCCESSS;
  payload: modulStateType[];
}
interface fetchModuleErrorAction {
  type: ModuleActionTypes.FETCH_MODULE_ERROR;
  payload: string;
}
interface fetchModuleOneAction {
  type: ModuleActionTypes.FETCH_ONE_MODULE;
  payload: string;
}
interface fetchModuleOneErrorAction {
  type: ModuleActionTypes.FETCH_ONE_MODULE_ERROR;
  payload: string;
}
interface fetchModuleOneSuccessAction {
  type: ModuleActionTypes.FETCH_ONE_MODULE_SUCCESSS;
  payload: ModuleAddProjectProps;
}
export interface modulPayload {
  modul: modulType[];
  description: {
    dbSettings: DescriptionModulBd[];
    frontSettings: DescriptionModulFront[];
  };
  projects: ProjectStateAttributes[];
}
export interface modulStateType {
  modul: modulType;
  description: {
    dbSettings: DescriptionModulBd[];
    frontSettings: DescriptionModulFront[];
  };
}
export interface descriptionType {
  dbSettings: DescriptionModulBd[];
  frontSettings: DescriptionModulFront[];
}
export interface ModulState {
  moduls: modulStateType[] | null;
  modul: ModuleAddProjectProps | null;
  loading: boolean;
  error: null | string;
}

export type ModuleAction =
  | addModuleAction
  | addModuleSuccessAction
  | addModuleErrorAction
  | fetchModuleAction
  | fetchModuleSuccessAction
  | fetchModuleErrorAction
  | fetchModuleOneSuccessAction
  | fetchModuleOneAction
  | fetchModuleOneErrorAction;
type projectFilter = {
  project: ProjectStateAttributes[];
};
export interface ModulFilet {
  modul: modulType;
  description: {
    frontSettings: DescriptionModulFront[] | projectFilter;
    dbSettings: DescriptionModulBd[];
  };
}
