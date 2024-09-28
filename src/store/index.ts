import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./reducers";
import rootSaga from "./sagas";

/* Root Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

/* Configure Redux Store */
const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck
    }).concat(sagaMiddleware),
  //   devTools: ENV_CONFIG.APP_ENV !== "production",
});

/* Run the sagas */
sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;

export default store;
