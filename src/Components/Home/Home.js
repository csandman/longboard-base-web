import React, { Component } from 'react';
import DeckThumbnail from '../DeckThumbnail/DeckThumbnail';
import { connect } from 'react-redux';
import { getDecks } from '../../actions/deckActions';
import PropTypes from 'prop-types';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { deckIndex: 0, currentDeck: {}, showDeck: true };
    this.changeDeck = this.changeDeck.bind(this);
    this.showDeck = this.showDeck.bind(this);
    this.hideDeck = this.hideDeck.bind(this);
  }

  componentDidMount() {
    this.props.getDecks();

    this.changeDeck();
    setInterval(this.changeDeck, 4000);
  }

  changeDeck() {
    console.log('changeDeck');
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
        <section className="body">
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
              {this.state.currentDeck.hasOwnProperty('deckName') && (
                <DeckThumbnail
                  deck={this.state.currentDeck}
                  images={this.props.images}
                  show={this.state.showDeck}
                />
              )}
            </section>
          </article>
          <div className="columnHolder borderBottom">
            <div className="column1">
              <div className="card">
                <a href="decks">
                  <span />
                </a>
                <h3>Deck Database</h3>
                <p>
                  A database of longboard decks with descriptions, deck
                  specifications, websites to buy from, and product videos.
                </p>
              </div>
              <div className="card">
                <a href="newBoards">
                  <span />
                </a>
                <h3>New Boards</h3>
                <p>
                  A collection decks added by users that have yet been added to
                  the main database
                </p>
              </div>
            </div>
            <div className="column2">
              <div className="card">
                <a href="form">
                  <span />
                </a>
                <h3>Add a Deck</h3>
                <p>
                  Submit details about a specific deck that you would like to be
                  added to the Deck Database.
                </p>
              </div>
              <div className="card">
                <a href="guides">
                  <span />
                </a>
                <h3>Guides</h3>
                <p>
                  A variety of guides on how to set up and maintain your
                  longboard and how to do a variety of tricks. Guides are in
                  both text and video form.
                </p>
              </div>
            </div>
          </div>
          <h3>Featured Decks:</h3>
          <div className="decks" />
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  getDecks: PropTypes.func.isRequired,
  decks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  decks: state.decksObj.decks
});

export default connect(
  mapStateToProps,
  { getDecks }
)(Home);
