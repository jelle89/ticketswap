import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EventsListContainer from "./components/EventsListContainer";
import TicketsListContainer from "./components/TicketsListContainer";
import TicketsDetailsContainer from "./components/TicketsDetailsContainer";
import SignUpContainer from "./components/SignUpContainer";
import LoginContainer from "./components/LoginContainer";

class App extends Component {
  render() {
    console.log(this.props,'does my app.js have props')
    return (
      <Provider store={store}>
        <div>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/events" exact component={EventsListContainer} />
            <Route path="/events/:id" exact component={TicketsListContainer} />
            <Route path="/ticket/:id" exact component={TicketsListContainer} />
            <Route
              path="/ticketdetails/:id"
              exact
              component={TicketsDetailsContainer}
            />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
