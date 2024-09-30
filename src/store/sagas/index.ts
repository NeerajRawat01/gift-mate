import { all, fork } from "redux-saga/effects";
import { userSagaWatcher } from "./user.saga";
import { authSagaWatcher } from "./auth.saga";
import { eventSagaWatcher } from "./event.saga";
import { invitationSagaWatcher } from "./invitation.saga";
import { contributionSagaWatcher } from "./contribution.saga";

export default function* rootSaga() {
  yield all([
    fork(userSagaWatcher),
    fork(authSagaWatcher),
    fork(eventSagaWatcher),
    fork(invitationSagaWatcher),
    fork(contributionSagaWatcher),
  ]);
}