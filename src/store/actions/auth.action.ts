import { authActionType } from "./actions.constants";

export interface AuthLoginActionPayloadType {
  password: string;
  email: string;
}

export const loginUserAction = (payload: AuthLoginActionPayloadType) => ({
  type: authActionType.LOGIN_USER,
  payload,
});
