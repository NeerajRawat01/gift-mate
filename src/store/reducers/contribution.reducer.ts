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
export const contributionSlice = createSlice({
  name: "contribution",
  initialState,
  reducers: {
    addMayContributions: userAdapter.addMany,
    // contributionAdd: userAdapter.addOne,
    contributionAdd: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;
      state.entities[id] = action.payload;
      if (!state.ids.includes(id)) {
        state.ids = [id, ...state.ids];
      }
    },
    contributionDelete: userAdapter.removeOne,
    contributionUpdate: userAdapter.updateOne,
    resetContributions: (state) => {
      state.entities = {};
      state.ids = [];
      state.loading = false;
      state.error = "";
      state.errors = [];
    },
    contributionLoading: (
      state,
      action: PayloadAction<{ loading: boolean }>
    ) => {
      state.loading = action.payload.loading;
    },
    contributionError: (
      state,
      action: PayloadAction<{ message: string; errors?: any }>
    ) => {
      state.error = action.payload.message;
      state.errors = action.payload.errors;
    },
  },
});

export const {
  contributionAdd,
  contributionUpdate,
  contributionLoading,
  contributionError,
  addMayContributions,
  resetContributions,
} = contributionSlice.actions;

export default contributionSlice.reducer;
