import React, { Component } from "react";
import { connect } from "react-redux";
import { getDeck } from "../../actions/deckActions";
import "./DeckPage.scss";

class DeckPage extends Component {
  componentDidMount() {
    const deckName = this.props.match.params.deck;
    this.props.getDeck(deckName);
  }

  render() {
    console.log(this.props.decksLoading);
    const deck = this.props.deck;

    let brand = "";
    if (deck.hasOwnProperty("brand")) {
      brand = deck.brand.replace(/\s/g, "").toLowerCase() || "";
    }

    const imgSrc = `https://dqsa52xlu6vay.cloudfront.net/images/decks/${brand}/medium/${
      deck.fileName
    }Medium.png`;

    return (
      <div id="deck-page">
        {!this.props.decksLoading ? (
          <div>
            <h2>{deck.deckName}</h2>
            <div className="deckBody">
              <div className="column1">
                <figure>
                  <img src={imgSrc} alt={`${deck.brand} ${deck.deckName}`} />
                </figure>
              </div>
              <div className="column2">
                <div className="video-container">
                  <iframe
                    title="Deck Demo"
                    width="560"
                    height="315"
                    src={deck.youtubeLink}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                  <div className="video-placeholder">
                    <div>No Video Available</div>
                  </div>
                </div>
                <h3>Specs</h3>
                <table>
                  <tbody />
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading">Loading&#8230;</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deck: state.decksObj.deck,
  decksLoading: state.decksObj.loading
});

export default connect(
  mapStateToProps,
  { getDeck }
)(DeckPage);
