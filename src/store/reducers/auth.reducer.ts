import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  userID?: number;
  loading?: boolean;
  error?: string;
}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true;
    },
    login_loading: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.loading = action.payload.loading;
    },
    login_completed: (state, action: PayloadAction<{ id: number }>) => {
      state.error = undefined;
      state.loading = false;
      state.userID = action.payload.id;
    },
    login_error: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  login: loginAction,
  login_completed: loginCompletedAction,
  login_error: loginErrorAction,
  login_loading: loginLoading,
} = authSlice.actions;

export default authSlice.reducer;
