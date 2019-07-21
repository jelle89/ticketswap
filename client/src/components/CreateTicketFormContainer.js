import React from "react";
import { connect } from "react-redux";
import { createTicket } from "../actions/tickets";
import TicketForm from "./TicketForm";

class CreateTicketFormContainer extends React.Component {
  state = {
    price: "",
    description: "",
    author: "Jelle"
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createTicket(this.state);
    this.setState({
      price: "",
      description: "",
      author: ""
    });
  };

  render() {
    return (
      <TicketForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createTicket }
)(CreateTicketFormContainer);
