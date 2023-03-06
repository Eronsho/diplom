import { ModuleAttributes, modulStateType } from "../../models/Modul";
import { UserPayload } from "../../models/User";
import {
  PayloadOneProject,
  ProjectActionTypes,
  ProjectStateAttributes,
  projectStateType,
} from "../../models/Project";

export const addProjectRequest = (payload: ModuleAttributes) => ({
  type: ProjectActionTypes.ADD_PROJECT,
  payload,
});
export const addProjectSuccess = (payload: ModuleAttributes) => ({
  type: ProjectActionTypes.ADD_PROJECT_SUCCESSS,
  payload,
});
export const addProjectError = (payload: string) => ({
  type: ProjectActionTypes.ADD_PROJECT_ERROR,
  payload,
});

export const fetchProjectRequest = () => ({
  type: ProjectActionTypes.FETCH_PROJECTS,
});
export const fetchProjectSuccess = (payload: ProjectStateAttributes[]) => ({
  type: ProjectActionTypes.FETCH_PROJECTS_SUCCESSS,
  payload,
});

export const fetchModuleError = (payload: string) => ({
  type: ProjectActionTypes.FETCH_PROJECTS_ERROR,
  payload,
});
export const fetchOneProjectRequest = (payload: PayloadOneProject) => ({
  type: ProjectActionTypes.FETCH_ONE_PROJECT,
  payload,
});
export const fetchProjectOneSuccess = (payload: projectStateType) => ({
  type: ProjectActionTypes.FETCH_ONE_PROJECT_SUCCESSS,
  payload,
});
export const fetchOneModuleError = (payload: string) => ({
  type: ProjectActionTypes.FETCH_ONE_PROJECT_ERROR,
  payload,
});
