import React from 'react';


export default function EventForm(props) {
  console.log('what are the props', props)
    return (<form onSubmit={props.onSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={props.onChange} value={props.values.name} />
      </label>
      
      <label>
        Picture url
        <input type="text" name="picture" onChange={props.onChange} value={props.values.picture} />
      </label>
      
      <label>
        Description:
        <input type="text" name="description" onChange={props.onChange} value={props.values.description} />
      </label>
      
      <button type="submit">Save</button>
    </form>)
  }