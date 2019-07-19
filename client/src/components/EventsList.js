import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateEventFormContainer from "./CreateEventFormContainer";

export default class EventsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.events &&
            this.props.events.map(event => (
              <li key={event.id}>
                <Link to={`/events/${event.id}`}>
                  {" "}
                  <p>{event.name}</p> <p>{event.description} </p>{" "}
                  <p>
                    <img src={event.picture} alt="img" />
                  </p>
                </Link>
              </li>
            ))}
        </ul>
        <CreateEventFormContainer />
        {!this.props.events && <li>Loading events...</li>}
      </div>
    );
  }
}
