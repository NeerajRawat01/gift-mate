import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { User } from "../../models/user";

const userAdapter = createEntityAdapter<User>();

const initialState = {
  ...userAdapter.getInitialState(),
  loading: false,
  error: "",
  errors: [],
  update: { loading: false },
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdd: userAdapter.addOne,
    userDelete: userAdapter.removeOne,
    userUpdate: userAdapter.updateOne,
    userLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.loading = action.payload.loading;
    },
    userError: (
      state,
      action: PayloadAction<{ message: string; errors?: any }>
    ) => {
      state.error = action.payload.message;
      state.errors = action.payload.errors;
    },
  },
});

export const { userAdd, userUpdate, userLoading, userError, userDelete } =
  userSlice.actions;

export default userSlice.reducer;
