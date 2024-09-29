import { all, call, put, takeLatest } from "redux-saga/effects";
import { authService } from "../../services/apiServices/authService";
import { localStorageService } from "../../services/localStorageServices";
import { authActionType } from "../actions/actions.constants";
import {
  loginCompletedAction,
  loginErrorAction,
  loginLoading,
} from "../reducers/auth.reducer";
import { userAdd } from "../reducers/user.reducer";

function* loginSaga(data: any): any {
  const userData = data.payload;
  const callback = data.callback;
  try {
    const response = yield call(authService.loginUser, userData);

    console.log("login", response);
    yield put(loginCompletedAction({ id: response?.user?.id }));
    yield put(userAdd(response.user));
    localStorageService.setAuthToken(response?.token);
    if (callback) {
      callback();
    }
  } catch (e: any) {
    yield put(
      loginErrorAction(
        (e?.errors && e.errors[0]?.message) || e?.response?.data?.message
      )
    );
    yield put(loginLoading({ loading: false }));
  }
}

export function* authSagaWatcher() {
  yield all([takeLatest(authActionType.LOGIN_USER, loginSaga)]);
}
