import React, { Component } from "react";
import { Link } from "react-router-dom";
// import CreateTicketFormContainer from './CreateTicketFormContainer'

export default class TicketsList extends Component {
  render() {
    console.log("test", this.props.tickets);
    return (
      <div>
        <ul>
          {this.props.tickets &&
            this.props.tickets.map(ticket => (
              <li key={ticket.id}>
                <Link to={`/ticketdetails/${ticket.id}`}>
                  {" "}
                  <p>Price in Euro: {ticket.price}</p>{" "}
                  <p>Description: {ticket.description} </p>
                </Link>
              </li>
            ))}
        </ul>
        {!this.props.tickets && <li>Loading tickets...</li>}
      </div>
    );
  }
}
