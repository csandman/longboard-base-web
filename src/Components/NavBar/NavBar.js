import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars } from 'react-icons/fa';
import './NavBar.scss'

export default class NavBar extends Component {

  render() {
    return (
      <nav id="nav-bar" className="fixed">
        <div className="container">
          <ul className="left">
            <li className="title-button">
              <Link to="/" className="link menu-item">LB Base</Link>
            </li>
            <li className="search-container">
              <span className="menu-item search-parent">
                <input type="text" className="search" id="dropdownInput" placeholder="Search..."/>
              </span>
              <ul id="dropdown"></ul>
            </li>
            <li>
              <Link to="/search" className="link menu-item">Advanced Search</Link>
            </li>
          </ul>
          <ul className="right">
            <li>
              <Link to="/decks" className="link menu-item">Deck Database</Link>
            </li>
            <li>
              <Link to="/add-deck" className="link menu-item">Add a Board</Link>
            </li>
            <li>
              <Link to="/guides" className="link menu-item">Guides</Link>
            </li>
          </ul>
          <ul className="mobile">
            <li className="menu-icon">
              <FaBars />
            </li>
            <li className="title-button">
              <Link to="/" className="link menu-item">LB Base</Link>
            </li>
            <li className="search-icon">
              <FaSearch />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
