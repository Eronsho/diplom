import jwt_decode from "jwt-decode";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { $host } from "../../http";
import {
  UserActionTypes,
  UserClientAttributes,
  UserPayload,
} from "../../models/User";
import {
  addUseerClientRequest,
  addUseerClientSuccess,
  addUseerError,
} from "../action-creators/user";
interface dateLoogin {
  data: {
    accessToken: string;
    refreshToken: string;
    user: UserClientAttributes;
  };
}
const addUser = (params: UserPayload) => {
  return $host.post<any>("api/user/registration", params);
};
const addLoginUser = (params: UserPayload) => {
  return $host.post<any>("api/user/login", params);
};
function* addUsereWorker(action: any) {
  try {
    const { data }: dateLoogin = yield call(addUser, action.payload);
    yield localStorage.setItem("token", data.accessToken);
    yield put(addUseerClientRequest(jwt_decode(data.accessToken)));
  } catch (e) {
    console.log(e);
    yield put(addUseerError("Произошла ошибка при загрузке типов"));
  }
}

function* addLoginUsereWorker(action: any) {
  try {
    debugger;

    const { data } = yield call(addLoginUser, action.payload);
    console.log(data);
    yield localStorage.setItem("token", data);
    yield put(addUseerClientSuccess(jwt_decode(data.accessToken)));
  } catch (e) {
    console.log(e);
    yield put(addUseerError("Произошла ошибка при загрузке типов"));
  }
}
function* logOutnUsereWorker() {
  try {
    localStorage.removeItem("token");
  } catch (e) {
    console.log(e);
    yield put(addUseerError("Произошла ошибка при загрузке типов"));
  }
}
export function* addUserClientfWatcher() {
  yield all([
    takeLatest(UserActionTypes.ADD_USER_CLIENT, addUsereWorker),
    takeLatest(UserActionTypes.FETCH_USER_CLIENT, addLoginUsereWorker),
  ]);
}
