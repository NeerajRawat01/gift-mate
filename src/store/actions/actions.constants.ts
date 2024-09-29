export enum MoviesActionType {
  FETCH_MOVIES = "movies/fetch",
  FETCH_MOVIE_BY_ID = "movies/fetch-movie-by-id",
}

export enum userActionType {
  CREATE_USER = "user/create",
}

export enum authActionType {
  LOGIN_USER = "user/login",
}

export enum eventActionType {
  CREATE_EVENT = "event/create",
  FETCH_EVENTS = "event/fetch",
}

export enum invitationActionType {
  SEND_INVITE = "invite/send",
  FETCH_INVITATION = "invitation/fetch",
}
