import React from 'react'
import TicketForm from './TicketForm'

export default function TicketDetails(props) {
  if (!props.ticket) return 'Loading ticket data...'
  
  return (
    <div>
      {props.editMode && <TicketForm onSubmit={props.onSubmit} onChange={props.onChange} values={props.formValues} />}
      
      {!props.editMode && <div>
        <h1>{props.ticket.name}</h1>
        
        <i>Price: {props.ticket.price}</i>
        
        <p>{props.ticket.description}</p>
        
        <button onClick={props.onDelete}>Delete</button>
        <button onClick={props.onEdit}>Edit</button>
      </div>}
    </div>
  )
}