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
import { toast } from "react-toastify";

function* loginSaga(data: any): any {
  const userData = data.payload;
  try {
    const response = yield call(authService.loginUser, userData);
    yield put(loginCompletedAction({ id: response?.user?.id }));
    yield put(userAdd(response.user));
    localStorageService.setAuthToken(response?.token);
    if (userData.callback) {
      userData.callback();
    }
    toast.success("Login successfully");
  } catch (e: any) {
    toast.error(e.message);
    yield put(
      loginErrorAction(
        (e?.errors && e.errors[0]?.message) || e?.response?.data?.message
      )
    );
    yield put(loginLoading({ loading: false }));
  }
}
function* fetchMeSaga(): any {
  try {
    const response = yield call(authService.fetchMe);
    yield put(userAdd(response.user));
  } catch (e: any) {
    localStorageService.removeAuthToken();
    toast.error(e.message);
    yield put(loginLoading({ loading: false }));
  }
}

export function* authSagaWatcher() {
  yield all([
    takeLatest(authActionType.LOGIN_USER, loginSaga),
    takeLatest(authActionType.FETCH_ME, fetchMeSaga),
  ]);
}
