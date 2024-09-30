import { UserActionType } from "./actions.constants";

export interface createUser {
  name: string;
  password: string;
  email: string;
}

export const createUserAction = (payload: createUser) => ({
  type: UserActionType.CREATE_USER,
  payload,
});
