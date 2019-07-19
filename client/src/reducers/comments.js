import { COMMENTS_FETCHED, COMMENTS_ADDED } from "../actions/comments";

export default (state = null, action = {}) => {
  console.log("commentsreducer", state, "commentsaction", action);
  switch (action.type) {
    case COMMENTS_FETCHED:
      return action.comments;
    case COMMENTS_ADDED:
      return state;

    default:
      return state;
  }
};
