import { AuthActionType } from "./actions.constants";

export interface AuthLoginActionPayloadType {
  password: string;
  email: string;
  callback?: () => void;
}

export const loginUserAction = (payload: AuthLoginActionPayloadType) => ({
  type: AuthActionType.LOGIN_USER,
  payload,
});

export const fetchMeAction = () => ({
  type: AuthActionType.FETCH_ME,
});
