import { call, put, all, takeLatest } from "redux-saga/effects";
import { $host } from "../../http";
import { ContractActionTypes, ContractAttributes } from "../../models/Contract";
import {
  addContractError,
  fetchContractError,
} from "../action-creators/contract";

const addcontract = (params: ContractAttributes) => {
  return $host.post("api/contract", params);
};
const getContract = () => {
  return $host.post<any>("api/contract");
};
function* addContractWorker(action: any) {
  try {
    const { data } = yield call(addcontract, action.payload);
    console.log(data);
  } catch (e) {
    console.log(e);
    yield put(addContractError("Произошла ошибка при загрузке типов"));
  }
}

function* getContractWorker(action: any) {
  try {
    debugger;

    const { data } = yield call(getContract);
    console.log(data);
  } catch (e) {
    console.log(e);
    yield put(fetchContractError("Произошла ошибка при загрузке типов"));
  }
}
export function* addContractfWatcher() {
  yield all([
    takeLatest(ContractActionTypes.ADD_CONTRACT, addContractWorker),
    takeLatest(ContractActionTypes.FETCH_CONTRACT, getContractWorker),
  ]);
}
