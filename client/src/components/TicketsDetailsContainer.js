import React from "react";
import { connect } from "react-redux";
import TicketsDetails from "./TicketsDetails";
import {
  loadTicket,
  updateTicket,
  loadTicketDetails,
  deleteTicket
} from "../actions/tickets";
import { submitComment, loadComments } from "../actions/comments";
import CommentContainer from "./CommentContainer";
import DrawComments from "./DrawComments";

class TicketsDetailsContainer extends React.Component {
  state = {
    editMode: false,
    formValues: { text: "Add comment", author: "Someone" }
  };

  componentDidMount() {
    console.log("compo did mount", Number(this.props.match.params.id));
    this.props.loadTicketDetails(Number(this.props.match.params.id));
    this.props.loadComments(this.props.match.params.id);
  }

  onDelete = () => {
    this.props.deleteTicket(this.props.ticket.id);
    this.props.history.push("/");
  };

  onEdit = () => {
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.ticket.name,
        price: this.props.ticket.price,
        description: this.props.ticket.description,
        author: this.props.ticket.author,
        text: this.props.comment.text
      }
    });
  };

  onChange = event => {
    console.log("onchange is aangeroepen", this.state);
    this.setState({
      formValues: {
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    console.log("pressed a butttton");
    event.preventDefault();
    this.setState({
      editMode: false
    });
    this.props.submitComment(this.props.ticket.id, this.state.formValues);
  };

  render() {
    console.log("render of ticketDetaislCOnt", this.props);
    const { match, ticket } = this.props;
    if (!this.props.ticket) return "......";

    return (
      <div>
        {" "}
        <TicketsDetails
          ticket={this.props.ticket}
          onEdit={this.onEdit}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onDelete={this.onDelete}
          editMode={this.state.editMode}
          formValues={this.state.formValues}
        />
        <CommentContainer
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          text={this.state.formValues.text}
        />
        <DrawComments comments={this.props.comment} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapstatetoprops", state.tickets);
  return {
    ticket: state.tickets,
    comment: state.comments
  };
};

export default connect(
  mapStateToProps,
  {
    loadTicket,
    loadTicketDetails,
    loadComments,
    deleteTicket,
    updateTicket,
    submitComment
  }
)(TicketsDetailsContainer);
