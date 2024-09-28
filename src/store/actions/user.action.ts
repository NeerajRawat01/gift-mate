import { userActionType } from "./actions.constants";

export interface createUser {
  name: string;
  password: string;
  email: string;
}

export const createUserAction = (payload: createUser) => ({
  type: userActionType.CREATE_USER,
  payload,
});
