import React, { Component } from "react";
import DeckThumbnail from "../DeckThumbnail/DeckThumbnail";
import { connect } from "react-redux";
import { getDecks } from "../../actions/deckActions";
import PropTypes from "prop-types";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckIndex: 0,
      currentDeck: {},
      showDeck: false
    };
    this.changeDeck = this.changeDeck.bind(this);
    this.showDeck = this.showDeck.bind(this);
    this.hideDeck = this.hideDeck.bind(this);
  }

  componentDidMount() {
    this.props.getDecks();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.decksLoading === true &&
      this.props.decksLoading === false
    ) {
      this.changeDeck();
      setInterval(this.changeDeck, 4000);
    }
  }

  changeDeck() {
    console.log("changeDeck");
    if (this.props.decks.length > 0) {
      const that = this;
      this.hideDeck();
      setTimeout(() => {
        let deckIndex = that.state.deckIndex;
        if (that.state.deckIndex + 2 === that.props.decks.length) {
          deckIndex = 0;
        } else {
          deckIndex += 1;
        }
        that.setState({
          deckIndex: deckIndex,
          currentDeck: that.props.decks[that.state.deckIndex]
        });
        that.showDeck();
      }, 700);
    }
  }

  showDeck() {
    this.setState({ showDeck: true });
  }

  hideDeck() {
    this.setState({ showDeck: false });
  }

  render() {
    return (
      <div id="home">
        <div className="above-the-fold">
          <section className="atf-center">
            <h1>Longboard Base</h1>
            <article>The catolog of every longboard made</article>
          </section>
        </div>
        <section className="body-section">
          <article className="deck-database">
            <section className="left">
              <article className="text-content">
                <h2>Deck Database</h2>
                <p>
                  An exhaustive collection of longboard decks made by companies
                  all around the world. Each deck is presented with a variety of
                  information from deck specs to videos.
                </p>
              </article>
            </section>
            <section className="right">
              {this.state.currentDeck.hasOwnProperty("deckName") && (
                <DeckThumbnail
                  deck={this.state.currentDeck}
                  show={this.state.showDeck}
                />
              )}
            </section>
          </article>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  getDecks: PropTypes.func.isRequired,
  decks: PropTypes.array.isRequired,
  decksLoading: PropTypes.bool.isRequired
};

Home.defaultProps = {
  decksLoading: false
};

const mapStateToProps = state => ({
  decks: state.decksObj.decks,
  decksLoading: state.decksObj.loading
});

export default connect(
  mapStateToProps,
  { getDecks }
)(Home);

// TODO end interval on unmount