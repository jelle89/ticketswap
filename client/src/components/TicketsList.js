import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateTicketFormContainer from "./CreateTicketFormContainer"

export default class TicketsList extends Component {
  render() {
    return (
      <div>
        <div>
          List of tickets
        </div>
        <div>
          <ul>
            {this.props.tickets &&
              this.props.tickets.map(ticket => {
                
                const ticketHourOfCreation= (new Date(ticket.createdAt)).getHours();
                let risk = 50;
                console.log(' asdfasdfdasdfsadfsadf', new Date(ticket.createdAt).getHours());
                if (ticketHourOfCreation < 9 ) {
                  risk += 10;
                } else if (ticketHourOfCreation > 17 ) {
                  risk += 10;
                } else {
                  risk -= 10;
                }
             

                return (
                  <li key={ticket.id}>
                    <Link to={`/ticketdetails/${ticket.id}`}>
                      {" "}
                      <p>Price in Euro: {ticket.price}</p>{" "}
                      <p>Description: {ticket.description} </p>
                    </Link>
                    <span>
                      We calculated that the risk of this ticket being a fraud is {risk}%
                    </span>
                  </li>
              )
            }
              )}
          </ul>
          {!this.props.tickets && <li>Loading tickets...</li>}
          <CreateTicketFormContainer />
        </div>
      </div>
    );
  }
}
