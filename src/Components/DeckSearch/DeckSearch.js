import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./DeckSearch.scss";
import DeckList from '../DeckList/DeckList';
import SearchPage from '../SearchPage/SearchPage';

class DeckSearch extends Component {

  render() {
    return <div id="deck-search">
      <Switch>
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/search/results" component={DeckList} />
      </Switch>
    </div>;
  }
}

export default DeckSearch;