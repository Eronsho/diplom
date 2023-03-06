import jwt_decode from "jwt-decode";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { $host } from "../../http";
import { UserActionTypes, UserPayload } from "../../models/User";
import {
  addUseerClientSuccess,
  addUseerError,
  addUseerModRequest,
  logOutSuccess,
} from "../action-creators/user";

const addUser = (params: UserPayload) => {
  return $host.post<any>("api/user/registration", params);
};
const addLoginUser = (params: UserPayload) => {
  return $host.post<any>("api/user/login/userMod", params);
};
const logOut = (params: any) => {
  console.log(params);

  return $host.post<any>("api/user/logout", params);
};
function* addUsereWorker(action: any) {
  try {
    debugger;
    const { data } = yield call(addUser, action.payload);

    yield localStorage.setItem("token", data.token);
    yield put(addUseerModRequest(jwt_decode(data.token)));
  } catch (e) {
    console.log(e);
    yield put(addUseerError("Произошла ошибка при загрузке типов"));
  }
}
const activetEmail = (id: string) => {
  return $host.post<any>(`api/recovery/+{id}`);
};
function* addLoginUsereWorker(action: any) {
  debugger;
  try {
    const { data } = yield call(addLoginUser, action.payload);
    console.log(data);
    yield localStorage.setItem("token", data.refreshToken);
    yield put(addUseerClientSuccess(jwt_decode(data.refreshToken)));
  } catch (e) {
    console.log(e);
    yield put(addUseerError("Произошла ошибка при загрузке типов"));
  }
}
function* activetEmailWorker(action: any) {
  try {
    debugger;
    const { data } = yield call(activetEmail, action.payload);

    yield put(addUseerClientSuccess(jwt_decode(data)));
  } catch (e) {
    console.log(e);
    yield put(addUseerError("Произошла ошибка при загрузке типов"));
  }
}
function* logOutnUsereWorker() {
  debugger;
  try {
    const refreshToken = localStorage.getItem("token");
    console.log(refreshToken);
    // yield call(logOut, refreshToken);
    yield put(logOutSuccess());
    localStorage.removeItem("token");
  } catch (e) {
    console.log(e);
    yield put(addUseerError("Произошла ошибка при загрузке типов"));
  }
}
export function* addUserModfWatcher() {
  yield all([
    takeLatest(UserActionTypes.ADD_USER_MOD, addUsereWorker),
    takeLatest(UserActionTypes.FETCH_USER_MOD, addLoginUsereWorker),
    takeLatest(UserActionTypes.LOG_OUT_USER, logOutnUsereWorker),
    takeLatest(UserActionTypes.FETCH_USER_ACTIVET, activetEmailWorker),
  ]);
}
