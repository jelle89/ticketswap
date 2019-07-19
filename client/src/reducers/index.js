import { combineReducers } from "redux";
import events from "./events";
import event from "./event";
import tickets from "./tickets";
import comments from "./comments";

export default combineReducers({
  events,
  event,
  tickets,
  comments
});
