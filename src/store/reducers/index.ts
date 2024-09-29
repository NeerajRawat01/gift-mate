import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import eventReducer from "./event.reducer";
import userReducer from "./user.reducer";
import invitationReducer from "./invitation.reducer";

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  event: eventReducer,
  invitation: invitationReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
