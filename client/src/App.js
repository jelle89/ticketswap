import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import EventsListContainer from "./components/EventsListContainer";
import TicketsListContainer from "./components/TicketsListContainer";
import TicketsDetailsContainer from "./components/TicketsDetailsContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventsListContainer} />
          <Route path="/events/:id" exact component={TicketsListContainer} />
          <Route path="/ticket/:id" exact component={TicketsListContainer} />
          <Route path="/ticketdetails/:id" exact component={TicketsDetailsContainer}/>
        </div>
      </Provider>
    );
  }
}

export default App;
