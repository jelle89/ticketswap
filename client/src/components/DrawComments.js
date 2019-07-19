import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DrawComments extends Component {
  render() {
    console.log("hallo propjes", this.props.comments);
    if (!this.props) return "......";
    return (
      <div>
        {!this.props.comments && <li>Loading comments...</li>}
        <ul>
          {this.props.comments &&
            this.props.comments.map(comment => (
              <li key={comment.id}>
                <p>{comment.text}</p>
              </li>
            ))}
        </ul>

        <Link to="/">Back to the homepage</Link>
      </div>
    );
  }
}
