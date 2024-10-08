import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import eventReducer from "./event.reducer";
import invitationReducer from "./invitation.reducer";
import userReducer from "./user.reducer";
import contributionReducer from "./contribution.reducer";

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  event: eventReducer,
  invitation: invitationReducer,
  contribution: contributionReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
