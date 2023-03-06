import { call, put, all, takeLatest } from "redux-saga/effects";
import { $host } from "../../http";
import {
  ModulFilet,
  ModuleActionTypes,
  ModuleAttributes,
  modulPayload,
  modulStateType,
} from "../../models/Modul";
import {
  addModuleError,
  fetchModuleError,
  fetchModuledOneSuccess,
  fetchModuledSuccess,
  fetchOneModuleError,
} from "../action-creators/module";
import { FormSelectAddValues, SelectActionTypes } from "../../models/Select";
import {
  AddNewSelectError,
  AddNewSelectSuccess,
} from "../action-creators/select";
import {
  PayloadOneProject,
  ProjectActionTypes,
  ProjectStateAttributes,
} from "../../models/Project";
import {
  addProjectError,
  fetchProjectOneSuccess,
  fetchProjectSuccess,
} from "../action-creators/project";

const addProject = (params: ProjectStateAttributes) => {
  return $host.post("api/module/project", params);
};

const getOneProject = (params: PayloadOneProject) => {
  return $host.post(`api/project`, params);
};

function* addModuleProjec(action: any) {
  try {
    const { data } = yield call(addProject, action.payload);
  } catch (e) {
    console.log(e);
    yield put(addProjectError("Произошла ошибка при загрузке типов"));
  }
}

function* getOneProjectWorker(action: any) {
  try {
    const { data } = yield call(getOneProject, action.payload);
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    yield put(fetchProjectOneSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(fetchOneModuleError("Произошла ошибка при загрузке типов"));
  }
}
export function* projectWatcher() {
  yield all([
    takeLatest(ProjectActionTypes.ADD_PROJECT, addModuleProjec),
    takeLatest(ProjectActionTypes.FETCH_ONE_PROJECT, getOneProjectWorker),
  ]);
}
