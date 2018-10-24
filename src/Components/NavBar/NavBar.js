import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./NavBar.scss";
var classNames = require("classnames");

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchOpen: false
    };

    this.openSearch = this.openSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
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

  render() {
    var searchClass = classNames({
      "search-bar": true,
      open: this.state.searchOpen
    });

    return (
      <nav id="nav-bar" className="fixed">
        <div className="container">
          <ul className="left">
            <li className="title-button">
              <Link to="/" className="link menu-item">
                LB Base
              </Link>
            </li>
            <li className="search-container">
              <span className="menu-item search-parent">
                <input
                  type="text"
                  className="search"
                  id="dropdownInput"
                  placeholder="Search..."
                />
              </span>
              <ul id="dropdown" />
            </li>
            <li>
              <Link to="/search" className="link menu-item">
                Advanced Search
              </Link>
            </li>
          </ul>
          <ul className="right">
            <li>
              <Link to="/decks" className="link menu-item">
                Deck Database
              </Link>
            </li>
            <li>
              <Link to="/add-deck" className="link menu-item">
                Add a Board
              </Link>
            </li>
            <li>
              <Link to="/guides" className="link menu-item">
                Guides
              </Link>
            </li>
          </ul>
          <ul className="mobile">
            <li className="title-button">
              <Link to="/" className="link menu-item">
                LB Base
              </Link>
            </li>
            <li className="menu-icon">
              <FaBars size={20} />
            </li>
            <li className="search-icon" onClick={this.openSearch}>
              <FaSearch size={20} />
            </li>
            <li className={searchClass}>
              <input type="text" className="search" placeholder="Search..." />
              <div className="close-icon" onClick={this.closeSearch}>
                <MdClose size={30} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
