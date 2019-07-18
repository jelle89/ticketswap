import React from 'react'
import {loadTicket} from '../actions/tickets'
import {connect} from 'react-redux'
import TicketsList from './TicketsList'



class TicketsListContainer extends React.Component {
  
  
  componentDidMount() {
    this.props.loadTicket()
  }
 
  
  render() {
    console.log("doetiehet", this.props.tickets)
    if (!this.props.tickets) return "loading"
    return  <TicketsList tickets={this.props.tickets} />
  
    
   
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets
})

export default connect(mapStateToProps, {loadTicket})(TicketsListContainer)