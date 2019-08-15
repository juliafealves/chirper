import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthed } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_USER = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthed(AUTHED_USER));
      dispatch(hideLoading());
    });
  };
}
