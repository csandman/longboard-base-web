import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./NavBar.scss";
const classNames = require("classnames");

const NavBar = props => {
  const preventPropagation = e => {
    e.stopPropagation();
  };

  const sidebarClass = classNames({
    "fullscreen-menu": true,
    open: props.menuOpen
  });

  const searchClass = classNames({
    "search-bar": true,
    open: props.searchOpen
  });

  return (
    <nav id="nav-bar">
      <div className="container fixed">
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
                onChange={props.handleSearchTermChange}
                value={props.searchTerm}
                onKeyPress={props.handleKeyPress}
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
              Longboard Base
            </Link>
          </li>
          <li className="search-icon" onClick={props.openSearch}>
            <FaSearch size={20} />
          </li>
          <li className="menu-icon" onClick={props.toggleMenu}>
            <FaBars size={20} />
          </li>

          <li className={searchClass}>
            <input
              type="text"
              className="search"
              placeholder="Search..."
              onChange={props.handleSearchTermChange}
              value={props.searchTerm}
              onKeyPress={props.handleKeyPress}
            />
            <div className="close-icon" onClick={props.closeSearch}>
              <MdClose size={30} />
            </div>
          </li>
        </ul>
        <div className={sidebarClass} onClick={props.toggleMenu}>
          <ul onClick={preventPropagation}>
            <div className="close-icon" onClick={props.toggleMenu}>
              <MdClose size={30} />
            </div>
            <li>
              <Link
                to="/search"
                className="menu-item"
                onClick={props.toggleMenu}
              >
                Advanced Search
              </Link>
            </li>
            <li>
              <Link
                to="/decks"
                className="menu-item"
                onClick={props.toggleMenu}
              >
                Deck Database
              </Link>
            </li>
            <li>
              <Link
                to="/add"
                className="menu-item"
                onClick={props.toggleMenu}
              >
                Add a Board
              </Link>
            </li>
            <li>
              <Link
                to="/guides"
                className="menu-item"
                onClick={props.toggleMenu}
              >
                Guides
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
