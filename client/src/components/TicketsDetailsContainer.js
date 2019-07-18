import React from 'react'
import {connect} from 'react-redux'
import TicketsDetails from './TicketsDetails'
import {loadTicket, updateTicket, deleteTicket} from '../actions/tickets'

class TicketsDetailsContainer extends React.Component {
    state = { editMode: false }

  componentDidMount() {
    this.props.loadTicket(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deleteTicket(this.props.ticket.id)
    this.props.history.push('/')
  }
  
  onEdit = () => {

    this.setState({
      editMode: true,
      formValues: {
        name: this.props.ticket.name,
        price: this.props.ticket.price,
        description: this.props.ticket.description
      }
    })
  }

  onChange = (ticket) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [ticket.target.name]: ticket.target.value
      }
    })
  }

  onSubmit = (ticket) => {
    ticket.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updatTicket(this.props.ticket.id, this.state.formValues)
  }

  render() {
    const {match, ticket} = this.props
    return (<TicketsDetails 
      ticket={ticket && match.params.id == ticket.id && ticket} 
      onEdit={this.onEdit}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      onDelete={this.onDelete}
      editMode={this.state.editMode}
      formValues={this.state.formValues}
    />)
  }
}


const mapStateToProps = state => ({
  ticket: state.ticket
})


export default connect(mapStateToProps, {loadTicket, deleteTicket, updateTicket})(TicketsDetailsContainer)