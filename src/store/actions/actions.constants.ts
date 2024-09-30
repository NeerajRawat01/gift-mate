export enum UserActionType {
  CREATE_USER = "user/create",
}

export enum AuthActionType {
  LOGIN_USER = "user/login",
  FETCH_ME = "user/fetch-me",
}

export enum EventActionType {
  CREATE_EVENT = "event/create",
  FETCH_EVENTS = "event/fetch",
  FETCH_EVENT_BY_ID = "event/fetch-by-id",
}

export enum InvitationActionType {
  SEND_INVITE = "invite/send",
  FETCH_INVITATION = "invitation/fetch",
}

export enum ContributionActionType {
  CREATE_CONTRIBUTION = "contribution/create",
  FETCH_CONTRIBUTION = "contribution/fetch",
}
