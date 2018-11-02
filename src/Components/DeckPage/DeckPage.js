import React, { Component } from "react";
import { connect } from "react-redux";
import { getDeck } from "../../actions/deckActions";
import "./DeckPage.scss";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

class DeckPage extends Component {
  componentDidMount() {
    const deckName = this.props.match.params.deck;
    this.props.getDeck(deckName);
  }

  render() {
    const deck = this.props.deck;

    let brand = "";
    if (deck.hasOwnProperty("brand")) {
      brand = deck.brand.replace(/\s/g, "").toLowerCase() || "";
    }

    const imgSrc = `${
      process.env.REACT_APP_CLOUDFLARE_URL
    }/images/decks/${brand}/medium/${deck.fileName}Medium.png`;

    // const logoImgSrc = `${
    //   process.env.REACT_APP_CLOUDFLARE_URL
    //   }/images/mini_logos/${brand}.png`;

    return (
      <div id="deck-page">
        {!this.props.decksLoading && deck.deckName ? (
          <div className="deck-page-grid">
            <h2 className="title">{`${deck.brand} ${deck.deckName}`}</h2>
            <figure>
              <img src={imgSrc} alt={`${deck.brand} ${deck.deckName}`} />
            </figure>
            <div className="video-container">
              <iframe
                title="Deck Demo"
                width="560"
                height="315"
                src={deck.youtubeLink}
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
              <div className="video-placeholder">
                <div>No Video Available</div>
              </div>
            </div>
            <section className="specs-table">
              <h3>Deck Specs</h3>
              <article className="table-title">Shape:</article>
              <article>{deck.specs.shape}</article>
              <article className="table-title">Length</article>
              <article>{deck.specs.length}"</article>
              <article className="table-title">Width:</article>
              <article>{deck.specs.width}"</article>
              <article className="table-title">Wheelbase Options:</article>
              {deck.specs.wheelbase.max === deck.specs.wheelbase.min ? (
                <article>{deck.specs.wheelbase.max}"</article>
              ) : (
                <article>{`${deck.specs.wheelbase.min}" - ${
                  deck.specs.wheelbase.max
                }"`}</article>
              )}
              <article className="table-title">Construction:</article>
              <article>{deck.specs.construction}</article>
            </section>
          </div>
        ) : (
          <LoadingScreen />
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
