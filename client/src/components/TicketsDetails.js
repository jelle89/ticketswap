import React from "react";
// import TicketForm from './TicketForm'

export default function TicketDetails(props) {
  if (!props.ticket) return "Loading ticket data...";
  console.log("render of ticketdetails", props);
  return (
    <div>
      <li>Price: {props.ticket.price}</li>
      <li>Description: {props.ticket.description}</li>
      <li>Author: {props.ticket.author}</li>

      <button onClick={props.onDelete}>Delete</button>
      <button onClick={props.onEdit}>Edit</button>
    </div>
  );
}
