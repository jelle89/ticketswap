import { combineReducers } from "redux";
import events from "./events";
import event from "./event";
import tickets from "./tickets";
import comments from "./comments";
import users from './users'
import logins from './login'

export default combineReducers({
  events,
  event,
  tickets,
  comments,
  users,
  logins
});
