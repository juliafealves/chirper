import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import authedUser from "./authedUser";
import users from "./users";
import tweets from "./tweets";

export default combineReducers({
  authedUser,
  users,
  tweets,
  loadingBar: loadingBarReducer
});
