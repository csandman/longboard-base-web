import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { setSearchTerm } from "../../actions/searchActions";
import { searchDecks, getDecks } from "../../actions/deckActions";
import { connect } from "react-redux";
import NavBar from "./NavBar";

class NavBarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchOpen: false,
      menuOpen: false,
      searchTerm: ""
    };

    this.openSearch = this.openSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  openSearch() {
    this.setState({
      searchOpen: true
    });
    document.querySelector(".search-bar>.search").focus();
  }

  closeSearch() {
    this.setState({
      searchOpen: false
    });
  }

  toggleMenu() {
    console.log('toggleMenu')
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
    console.log(this.state.menuOpen)
  }


  handleSearchTermChange(e) {
    console.log('handle search term change');
    
    console.log(this.props.location.pathname);
    this.setState({ searchTerm: e.target.value });
    if (this.props.location.pathname === "/search/results")
      if (e.target.value === "") {
        this.props.getDecks();
      } else {
        this.props.searchDecks(e.target.value);
      }

    console.log(e.target.value);
  }

  handleKeyPress(e) {
    console.log('key press')
    if (e.key === "Enter") {
      this.props.setSearchTerm(this.state.searchTerm);
      this.props.history.push("/search/results");
    }
  }

  render() {
    return (
      <NavBar
        openSearch={this.openSearch}
        closeSearch={this.closeSearch}
        handleSearchTermChange={this.handleSearchTermChange}
        handleKeyPress={this.handleKeyPress}
        searchTerm={this.state.searchTerm}
        searchOpen={this.state.searchOpen}
        toggleMenu={this.toggleMenu}
        menuOpen={this.state.menuOpen}
      />
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default withRouter(
  connect(
    mapStateToProps,
    { setSearchTerm, searchDecks, getDecks }
  )(NavBarContainer)
);
