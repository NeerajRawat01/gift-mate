import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { userService } from "../../services/apiServices/userSrvice";
import { UserActionType } from "../actions/actions.constants";
import { userError } from "../reducers/user.reducer";

function* createUserSaga(action: any): any {
  const userData = action.payload;
  try {
    yield call(userService.createUser, userData);
    toast.success("User created successfully");
  } catch (e: any) {
    toast.error(e.message);
    yield put(userError(e.message));
  }
}

export function* userSagaWatcher() {
  yield all([takeLatest(UserActionType.CREATE_USER, createUserSaga)]);
}
