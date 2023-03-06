import {
  ModuleActionTypes,
  ModuleAttributes,
  ModuleProjectProps,
  modulPayload,
  modulStateType,
} from "../../models/Modul";

export const addModuledRequest = (payload: ModuleAttributes) => ({
  type: ModuleActionTypes.ADD_MODULE,
  payload,
});
export const addModuledSuccess = (payload: ModuleAttributes) => ({
  type: ModuleActionTypes.ADD_MODULE_SUCCESSS,
  payload,
});
export const addModuleError = (payload: string) => ({
  type: ModuleActionTypes.ADD_MODULE_ERROR,
  payload,
});

export const fetchModuledRequest = () => ({
  type: ModuleActionTypes.FETCH_MODULE,
});
export const fetchModuledSuccess = (payload: modulStateType[]) => ({
  type: ModuleActionTypes.FETCH_MODULE_SUCCESSS,
  payload,
});

export const fetchModuleError = (payload: string) => ({
  type: ModuleActionTypes.FETCH_MODULE_ERROR,
  payload,
});
export const fetchOneModuledRequest = (payload: string) => ({
  type: ModuleActionTypes.FETCH_ONE_MODULE,
  payload,
});
export const fetchModuledOneSuccess = (payload: number) => ({
  type: ModuleActionTypes.FETCH_ONE_MODULE_SUCCESSS,
  payload,
});
export const fetchOneModuleError = (payload: string) => ({
  type: ModuleActionTypes.FETCH_ONE_MODULE_ERROR,
  payload,
});
