import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { authService } from "../../services/apiServices/authService";
import { localStorageService } from "../../services/localStorageServices";
import { AuthActionType } from "../actions/actions.constants";
import { loginErrorAction, loginLoading } from "../reducers/auth.reducer";
import { userAdd, userLoading } from "../reducers/user.reducer";

function* loginSaga(data: any): any {
  const userData = data.payload;

  try {
    const response = yield call(authService.loginUser, userData);
    yield put(userLoading({ loading: true }));
    yield put(userAdd(response.user));
    console.log("response", response?.token);
    localStorageService.setAuthToken(response?.token);
    if (userData.callback) {
      userData.callback();
    }
    yield put(userLoading({ loading: false }));
    toast.success("Login successfully");
  } catch (e: any) {
    yield put(userLoading({ loading: false }));
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
    takeLatest(AuthActionType.LOGIN_USER, loginSaga),
    takeLatest(AuthActionType.FETCH_ME, fetchMeSaga),
  ]);
}
