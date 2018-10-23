import React, { Component } from "react";
import DeckThumbnail from "../DeckThumbnail/DeckThumbnail";
import { connect } from "react-redux";
import { getDecks } from "../../actions/deckActions";
import "./DeckList.scss";

class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  render() {
    return (
      <div className="deck-container">
        {this.props.decks.map(deck => (
          <DeckThumbnail key={deck._id} deck={deck} show={true} />
        ))}
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
  decksLoading: state.decksObj.loading
});

export default connect(
  mapStateToProps,
  { getDecks }
)(DeckList);
