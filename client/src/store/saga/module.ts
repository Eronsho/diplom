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
import { ProjectStateAttributes } from "../../models/Project";
import { fetchProjectSuccess } from "../action-creators/project";

const addModule = (params: ModuleAttributes) => {
  return $host.post("api/module", params);
};
const getModule = () => {
  return $host.get<any>("api/moduls");
};
const getOneModule = (id: string) => {
  debugger;
  return $host.get<any>(`api/module` + id);
};

const filterModul = (data: modulPayload) => {
  const modul = data.modul;
  const dec = data.description;
  const projects = data.projects;

  const moduls = modul.map((e) => ({
    modul: e,
    description: {
      frontSettings: [...dec.frontSettings.filter((i) => i.id_modul === e.id)],
      dbSettings: dec.dbSettings.filter((i) => i.id_modul === e.id),
    },
  }));

  return { moduls, projects };
};
function* addModuleWorker(action: any) {
  try {
    const { data } = yield call(addModule, action.payload);
    console.log(data);
  } catch (e) {
    console.log(e);
    yield put(addModuleError("Произошла ошибка при загрузке типов"));
  }
}

function* getModuleWorker(action: any) {
  try {
    const { data } = yield call(getModule);
    const { projects, moduls } = filterModul(data);
    console.log("test", moduls);
    yield put(fetchModuledSuccess(moduls));
    yield put(fetchProjectSuccess(projects));
  } catch (e) {
    console.log(e);
    yield put(fetchModuleError("Произошла ошибка при загрузке типов"));
  }
}
function* getOneModuleWorker(action: any) {
  try {
    const { data } = yield call(getOneModule, action.payload);
    yield put(fetchModuledOneSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(fetchOneModuleError("Произошла ошибка при загрузке типов"));
  }
}
export function* addModuleWatcher() {
  yield all([
    takeLatest(ModuleActionTypes.ADD_MODULE, addModuleWorker),
    takeLatest(ModuleActionTypes.FETCH_MODULE, getModuleWorker),
    takeLatest(ModuleActionTypes.FETCH_ONE_MODULE, getOneModuleWorker),
  ]);
}
