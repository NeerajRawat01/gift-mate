import { createSelector } from "reselect";
import { AppState } from "../index";

const userStore = (store: AppState) => store.user;

const getUser = (state: AppState) => {
  const userId = state.user.ids[0];
  return state.user.entities[userId];
};

export const getUserData = createSelector(getUser, (user) => user);

export const getUserLoading = createSelector(
  [userStore],
  (user) => user.loading
);

export const userErrors = createSelector([userStore], (user) => user.errors);
