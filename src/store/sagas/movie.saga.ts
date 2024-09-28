import { all, call, put, takeLatest } from "redux-saga/effects";
import { movieService } from "../../services/apiServices/movieService";
import { MoviesActionType } from "../actions/actions.constants";
import {
  addLoading,
  fetchDetailedMovie,
  fetchMovies,
  fetchMoviesCompleted,
  fetchMoviesError,
} from "../reducers/movie.reducer";

function* moviesFetchSaga(action: any): any {
  const query = action.payload;
  try {
    yield put(fetchMovies());
    const data = yield call(movieService.fetchMovies, query);
    yield put(fetchMoviesCompleted({ movies: data }));
  } catch (e: any) {
    yield put(fetchMoviesError(e.message));
  }
}

function* movieDetailFetchSaga(action: any): any {
  const id = action.payload;
  try {
    yield put(addLoading({loading: true}));
    const data = yield call(movieService.fetchMovieDetail, id);
    yield put(fetchDetailedMovie({ movieDetail: data }));
  } catch (e: any) {
    yield put(fetchMoviesError(e.message));
  }
}

export function* movieSagaWatcher() {
  yield all([
    takeLatest(MoviesActionType.FETCH_MOVIES, moviesFetchSaga),
    takeLatest(MoviesActionType.FETCH_MOVIE_BY_ID, movieDetailFetchSaga),
  ]);
}
