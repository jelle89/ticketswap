import request from "superagent";

export const COMMENTS_FETCHED = "COMMENTS_FETCHED";
export const COMMENTS_ADDED = "COMMENTS_ADDED";

const baseUrl = "http://localhost:5000";

const commentsFetched = comments => ({
  type: COMMENTS_FETCHED,
  comments
});

const commentsAdded = comments => ({
  type: COMMENTS_ADDED,
  comments
});

export const submitComment = (id, formValues) => dispatch => {
  console.log("action smc ", id);
  console.log("action smc ", formValues);
  request
    .post(`${baseUrl}/comments`)
    .send({ id: id, data: formValues })
    .then(response => {
      console.log("res", response);
      dispatch(commentsAdded(response.body));
    })
    .catch(console.error);
};

export const loadComments = id => (dispatch, getState) => {
  if (getState().comments) return;

  request(`${baseUrl}/comments`)
    .then(response => {
      dispatch(commentsFetched(response.body));
    })
    .catch(console.error);
};
