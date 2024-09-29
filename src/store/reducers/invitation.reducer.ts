import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter<any>();

const initialState = {
  ...userAdapter.getInitialState(),
  loading: false,
  error: "",
  errors: [],
  update: { loading: false },
};
export const invitationSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addMayInvitations: userAdapter.addMany,
    invitationAdd: userAdapter.addOne,
    invitationDelete: userAdapter.removeOne,
    invitationUpdate: userAdapter.updateOne,
    invitationLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.loading = action.payload.loading;
    },
    invitationError: (
      state,
      action: PayloadAction<{ message: string; errors?: any }>
    ) => {
      state.error = action.payload.message;
      state.errors = action.payload.errors;
    },
  },
});

export const {
  invitationAdd,
  invitationUpdate,
  invitationLoading,
  invitationError,
  addMayInvitations,
} = invitationSlice.actions;

export default invitationSlice.reducer;
