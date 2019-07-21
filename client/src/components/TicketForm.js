import React from "react";

export default function TicketForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Price
        <input
          type="text"
          name="price"
          onChange={props.onChange}
          value={props.values.price}
        />
      </label>

      <label>
        Description
        <input
          type="text"
          name="description"
          onChange={props.onChange}
          value={props.values.description}
        />
      </label>

      <label>
        Author:
        <input
          type="text"
          name="author"
          onChange={props.onChange}
          value={props.values.author}
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}
