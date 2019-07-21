import React from "react";

export default function CommentContainer(props) {
  console.log(props, 'propsvancomments')
  return (
    <form onSubmit={props.onSubmit}>
    
      <label>
        Comment:
        <input
          type="text"
          name="text"
          onChange={props.onChange}
          value={props.text}
        />
      </label>
      <button onClick={props.onSubmit}>Submit</button>
    </form>
  );
}
