import request from "superagent";

export const TICKETS_FETCHED = "TICKETS_FETCHED";
export const TICKET_FETCHED = "TICKET_FETCHED";
export const TICKET_UPDATE_SUCCESS = "TICKET_UPDATE_SUCCESS";
export const TICKET_DELETE_SUCCESS = "TICKET_DELETE_SUCCESS";
export const TICKET_CREATE_SUCCESS = "TICKET_CREATE_SUCCESS";
export const TICKET_DETAIL_FETCHED = "TICKED_DETAIL_FETCHED";

const baseUrl = "http://localhost:5000";

const ticketsFetched = tickets => ({
  type: TICKETS_FETCHED,
  tickets
});

const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  ticket
});
const ticketDetailFetched = ticket => ({
  type: TICKET_DETAIL_FETCHED,
  ticket
});

const ticketUpdateSuccess = ticket => ({
  type: TICKET_UPDATE_SUCCESS,
  ticket
});

const ticketDeleteSuccess = ticketId => ({
  type: TICKET_DELETE_SUCCESS,
  ticketId
});

const ticketCreateSuccess = ticket => ({
  type: TICKET_CREATE_SUCCESS,
  ticket
});

export const createTicket = (eventId, ticket) => dispatch => {
  request
    .post(`${baseUrl}/events/${eventId}`)
    .send(ticket)
    .then(response => {
      dispatch(ticketCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const loadTickets = id => dispatch => {
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(ticketsFetched(response.body));
    })
    .catch(console.error);
};

export const loadTicket = (id) => (dispatch, getState) => {
  console.log("LoadtIcket???",id);
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      console.log("response?", response.body);
      dispatch(ticketFetched(response.body));
    })
    .catch(console.error);
};

export const loadTicketDetails = ticketId => dispatch => {
  console.log("LoadtIcketdetails", ticketId);
  request(`${baseUrl}/ticketdetails/${ticketId}`)
    .then(response => {
      console.log("response?", response.body.risk);
      dispatch(ticketDetailFetched(response.body));
    })
    .catch(console.error);
};

export const updateTicket = (id, data) => dispatch => {
  request
    .patch(`${baseUrl}/events/${id}`)
    .send(data)
    .then(response => {
      dispatch(ticketUpdateSuccess(response.body));
    })
    .catch(console.error);
};

export const deleteTicket = id => dispatch => {
  request
    .delete(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(ticketDeleteSuccess(id));
    })
    .catch(console.error);
};
