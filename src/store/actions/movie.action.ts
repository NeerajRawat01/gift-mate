import { MoviesActionType } from "./actions.constants";

export const fetchMoviesAction = (payload: string) => ({
  type: MoviesActionType.FETCH_MOVIES,
  payload,
});

export const fetchMovieByIdAction = (payload: string) => ({
  type: MoviesActionType.FETCH_MOVIE_BY_ID,
  payload,
});
