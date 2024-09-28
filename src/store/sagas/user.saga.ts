import { all, call, takeLatest } from "redux-saga/effects";
import { userService } from "../../services/apiServices/userSrvice";
import { userActionType } from "../actions/actions.constants";

function* createUserSaga(action: any): any {
  const userData = action.payload;
  try {
    // yield put(fetchMovies());
    const data = yield call(userService.createUser, userData);
    console.log("user", data);
    // yield put(fetchMoviesCompleted({ movies: data }));
  } catch (e: any) {
    // yield put(fetchMoviesError(e.message));
  }
}

export function* userSagaWatcher() {
  yield all([takeLatest(userActionType.CREATE_USER, createUserSaga)]);
}
