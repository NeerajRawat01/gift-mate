import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Event } from "../../models/event";

const userAdapter = createEntityAdapter<Event>();

const initialState = {
  ...userAdapter.getInitialState(),
  loading: false,
  error: "",
  errors: [],
  update: { loading: false },
};
export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addMayEvents: userAdapter.addMany,
    eventAdd: userAdapter.addOne,
    eventDelete: userAdapter.removeOne,
    eventUpdate: userAdapter.updateOne,
    eventLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
      state.loading = action.payload.loading;
    },
    eventError: (
      state,
      action: PayloadAction<{ message: string; errors?: any }>
    ) => {
      state.error = action.payload.message;
      state.errors = action.payload.errors;
    },
  },
});

export const { eventAdd, eventUpdate, eventLoading, eventError, addMayEvents } =
  eventSlice.actions;

export default eventSlice.reducer;
