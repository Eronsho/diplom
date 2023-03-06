import { call, put, all, takeLatest } from "redux-saga/effects";
import { $host } from "../../http";
import {
  ModuleActionTypes,
  ModuleAttributes,
  modulPayload,
  modulStateType,
} from "../../models/Modul";
import {
  addModuleError,
  fetchModuleError,
  fetchModuledSuccess,
} from "../action-creators/module";
import {
  FormSelectAddValues,
  SelectActionTypes,
  SelectValues,
} from "../../models/Select";
import {
  AddNewSelectError,
  AddNewSelectSuccess,
  FetcSelectAllError,
  FetcSelectAllSuccess,
} from "../action-creators/select";

const getAllSelect = () => {
  return $host.get<SelectValues[]>("api/selects");
};
const addNewSelect = (params: FormSelectAddValues) => {
  return $host.post("api/select", params);
};

function* getAllSelelctWatcher(action: any) {
  try {
    const { data } = yield call(getAllSelect);
    yield put(FetcSelectAllSuccess(data));
    return data;
  } catch (error) {
    yield put(FetcSelectAllError("Произошла ошибка при загрузке типов"));
  }
}

function* addNewSelelctWatcher(action: any) {
  try {
    const { data } = yield call(addNewSelect, action.payload);
    yield put(AddNewSelectSuccess(data));
    return data;
  } catch (error) {
    yield put(AddNewSelectError("Произошла ошибка при загрузке типов"));
  }
}

export function* SelectWatcher() {
  yield all([
    takeLatest(SelectActionTypes.FETCH_SELECT, getAllSelelctWatcher),
    takeLatest(SelectActionTypes.ADD_NEW_SELECT, addNewSelelctWatcher),
  ]);
}
