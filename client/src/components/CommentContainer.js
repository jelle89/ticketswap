import React from "react";

export default function CommentContainer(props) {
  
  
  if (!props) return '......' 
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
