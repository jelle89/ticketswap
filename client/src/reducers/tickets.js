import {
  TICKETS_FETCHED,
  TICKET_FETCHED,
  TICKET_CREATE_SUCCESS,
  TICKET_DELETE_SUCCESS,
  TICKET_UPDATE_SUCCESS,
  TICKET_DETAIL_FETCHED
} from "../actions/tickets";

export default (state = null, action = {}) => {
  console.log("reducers", state, "action", action);
  switch (action.type) {
    case TICKETS_FETCHED:
      return action.tickets;

    case TICKET_FETCHED:
      return action.ticket;

    case TICKET_DETAIL_FETCHED:
      return action.ticket;

    case TICKET_UPDATE_SUCCESS:
      return action.ticket;

    case TICKET_CREATE_SUCCESS:
      return [action.ticket, ...state];

    case TICKET_DELETE_SUCCESS:
      return state && state.filter(ticket => ticket.id !== action.ticketId);

    default:
      return state;
  }
};
