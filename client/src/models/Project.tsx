export interface ProjectStateAttributes {
  [key: string]: string | number | boolean;
  id_modul: string;
  user_id: string;
  id: string;
}
export enum ProjectActionTypes {
  ADD_PROJECT = "ADD_PROJECT",
  ADD_PROJECT_SUCCESSS = "ADD_PROJECT_SUCCESSS",
  ADD_PROJECT_ERROR = "ADD_PROJECT_ERROR",
  FETCH_PROJECTS = "FETCH_PROJECTS",
  FETCH_PROJECTS_SUCCESSS = "FETCH_PROJECTS_SUCCESSS",
  FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR",
  FETCH_ONE_PROJECT = "FETCH_ONE_PROJECT",
  FETCH_ONE_PROJECT_SUCCESSS = "FETCH_ONE_PROJECT_SUCCESSS",
  FETCH_ONE_PROJECT_ERROR = "FETCH_ONE_PROJECT_ERROR",
}
interface addProjectAction {
  type: ProjectActionTypes.ADD_PROJECT;
  payload: ProjectStateAttributes;
}
interface addProjectSuccessAction {
  type: ProjectActionTypes.ADD_PROJECT_SUCCESSS;
  payload: ProjectStateAttributes;
}
interface addProjectErrorAction {
  type: ProjectActionTypes.ADD_PROJECT_ERROR;
  payload: string;
}
interface fetchProjectAction {
  type: ProjectActionTypes.FETCH_PROJECTS;
}
interface fetchProjectSuccessAction {
  type: ProjectActionTypes.FETCH_PROJECTS_SUCCESSS;
  payload: ProjectStateAttributes[][];
}
interface fetchProjectErrorAction {
  type: ProjectActionTypes.FETCH_PROJECTS_ERROR;
  payload: string;
}
interface fetchOneProjectAction {
  type: ProjectActionTypes.FETCH_ONE_PROJECT;
}
interface fetchOneProjectSuccessAction {
  type: ProjectActionTypes.FETCH_ONE_PROJECT_SUCCESSS;
  payload: projectStateType;
}
interface fetchOneProjectErrorAction {
  type: ProjectActionTypes.FETCH_ONE_PROJECT_ERROR;
  payload: string;
}
export interface projectStateType {
  project: ProjectStateAttributes;
  documents: file[];
}
interface file {
  allow_null: boolean;
  createdAt: string;
  id: string;
  id_project: string;
  name: string;
  updatedAt: string;
  url: string;
}
export interface ProjectState {
  projects: ProjectStateAttributes[][] | null;
  project: projectStateType;
  loading: boolean;
  error: null | string;
}
export interface PayloadOneProject {
  idModul: string;
  idProject: string;
}
export type ProjectAction =
  | addProjectAction
  | addProjectSuccessAction
  | addProjectErrorAction
  | fetchProjectAction
  | fetchProjectSuccessAction
  | fetchProjectErrorAction
  | fetchOneProjectAction
  | fetchOneProjectSuccessAction
  | fetchOneProjectErrorAction;
