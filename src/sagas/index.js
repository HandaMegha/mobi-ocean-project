import { fork } from "redux-saga/effects";
import AuthSaga from "./AuthSaga";

export default function* sagas() {
  yield fork(AuthSaga().watcher);
}
