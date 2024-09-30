import { all, call, put, takeLatest } from "redux-saga/effects";
import { userService } from "../../services/apiServices/userSrvice";
import { userActionType } from "../actions/actions.constants";
import { userAdd, userError } from "../reducers/user.reducer";

function* createUserSaga(action: any): any {
  const userData = action.payload;
  try {
    const data = yield call(userService.createUser, userData);
    yield put(userAdd(data.data));
  } catch (e: any) {
    yield put(userError(e.message));
  }
}

export function* userSagaWatcher() {
  yield all([takeLatest(userActionType.CREATE_USER, createUserSaga)]);
}
