import React, { Component } from 'react'
import Login from './Login'
import '../App.css'
import { connect } from 'react-redux'
import {  Redirect, Link } from 'react-router-dom'
import SignUp from './SignUp'

class LoginContainer extends Component {


    render() {
      console.log('props van logincontainer', this.props)
        if(this.props.login.logins.jwt){
        
         return  <Redirect to='/events' />
        }

        return (
            <div><SignUp /><Login />
            <Link to="/events">Straight to events</Link></div>
        )

    }
}
const mapStatetoProps = (state) => {
    return {
        signinResult: state.users,
        login: state
    }
}

export default connect(mapStatetoProps)(LoginContainer)
