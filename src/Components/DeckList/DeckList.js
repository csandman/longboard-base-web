import React, { Component } from "react";
import DeckThumbnail from "../DeckThumbnail/DeckThumbnail";
import SortBy from "../SortBy/SortBy";
import { connect } from "react-redux";
import { getDecks, searchDecks } from "../../actions/deckActions";
import { getSearchTerm } from "../../actions/searchActions";
import "./DeckList.scss";

class DeckList extends Component {
  componentDidMount() {
    if (
      this.props.location.pathname === "/search/results" &&
      this.props.searchTerm !== ""
    ) {
      this.props.searchDecks(this.props.searchTerm);
    } else {
      this.props.getDecks();
    }
  }

  render() {
    return (
      <div>
        <SortBy />
        <div className="deck-container">
          {this.props.decks &&
            this.props.decks.map(deck => (
              <DeckThumbnail key={deck._id} deck={deck} show={true} />
            ))}
        </div>
      </div>
    );
  }
}

DeckList.defaultProps = {
  decks: [],
  decksLoading: false
};

const mapStateToProps = state => ({
  decks: state.decksObj.decks,
  decksLoading: state.decksObj.loading,
  searchTerm: state.searchObj.searchTerm
});

export default connect(
  mapStateToProps,
  { getDecks, getSearchTerm, searchDecks }
)(DeckList);
