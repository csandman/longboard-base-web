import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import "./DeckDatabase.scss";
import DeckList from "../DeckList/DeckList";
import DeckPage from "../DeckPage/DeckPage";

class DeckDatabase extends Component {

  render() {
    return (
      <div id="deck-database">
        <Switch>
          <Route exact path='/decks' render={() => (
            <Redirect to="/decks/all" />
          )} />
          <Route exact path="/decks/:brand" component={DeckList} />
          <Route exact path="/decks/:brand/:deck" component={DeckPage} />
        </Switch>
      </div>
    );
  }
}

export default DeckDatabase;
