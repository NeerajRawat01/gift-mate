import { all, fork } from "redux-saga/effects";
import { movieSagaWatcher } from "./movie.saga";
import { userSagaWatcher } from "./user.saga";
import { authSagaWatcher } from "./auth.saga";

export default function* rootSaga() {
  yield all([
    fork(movieSagaWatcher),
    fork(userSagaWatcher),
    fork(authSagaWatcher),
  ]);
}
