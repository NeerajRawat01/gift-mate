import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import userReducer from "./user.reducer";
import authReducer from "./auth.reducer";

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  movie: movieReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
