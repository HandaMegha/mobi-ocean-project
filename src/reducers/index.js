import { combineReducers } from "redux";
import auth from "./auth.reducer";

const rootReducer = combineReducers({
  authReducer: auth,
});

export default rootReducer;
