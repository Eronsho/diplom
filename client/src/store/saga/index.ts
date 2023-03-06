import { all, fork } from "redux-saga/effects";
import { addContractfWatcher } from "./contract";
import { addModuleWatcher } from "./module";
import { addUserClientfWatcher } from "./userClient";
import { addUserModfWatcher } from "./userMod";
import { SelectWatcher } from "./select";
import { projectWatcher } from "./project";

export function* rootWatcher() {
  yield all([
    fork(addUserModfWatcher),
    fork(addUserClientfWatcher),
    fork(addContractfWatcher),
    fork(addModuleWatcher),
    fork(SelectWatcher),
    fork(projectWatcher),
  ]);
}
