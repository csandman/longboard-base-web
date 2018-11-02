import React, { Component } from "react";
import { connect } from "react-redux";
import { FaAngleUp } from "react-icons/fa";
import { setSortOptions } from "../../actions/deckActions";
import "./SortBy.scss";
const classNames = require("classnames");

class SortBy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "deckName",
      desc: false
    };

    this.selectOption = this.selectOption.bind(this);
  }

  selectOption(e) {
    const selection = e.currentTarget.getAttribute("name");
    if (this.state.selected === selection) {
      this.setState(
        {
          desc: !this.state.desc
        },
        () => {
          this.props.setSortOptions({
            selection: this.state.selected,
            order: this.state.desc ? "desc" : "asc"
          });
        }
      );
    } else {
      this.setState(
        {
          selected: selection,
          desc: false
        },
        () => {
          this.props.setSortOptions({
            selection: this.state.selected,
            order: this.state.desc ? "desc" : "asc"
          });
        }
      );
    }
  }

  render() {
    const nameClasses = classNames({
      option: true,
      selected: this.state.selected === "deckName",
      desc: this.state.desc
    });

    const brandClasses = classNames({
      option: true,
      selected: this.state.selected === "brand",
      desc: this.state.desc
    });

    const lengthClasses = classNames({
      option: true,
      selected: this.state.selected === "specs.length",
      desc: this.state.desc
    });

    const widthClasses = classNames({
      option: true,
      selected: this.state.selected === "specs.width",
      desc: this.state.desc
    });

    return (
      <div id="sort-by">
        <div
          className={nameClasses}
          name="deckName"
          onClick={this.selectOption}
        >
          <div className="title">Name</div>
          <FaAngleUp className="icon" />
        </div>
        <div className={brandClasses} name="brand" onClick={this.selectOption}>
          <div className="title">Brand</div>
          <FaAngleUp className="icon" />
        </div>
        <div
          className={lengthClasses}
          name="specs.length"
          onClick={this.selectOption}
        >
          <div className="title">Length</div>
          <FaAngleUp className="icon" />
        </div>
        <div
          className={widthClasses}
          name="specs.width"
          onClick={this.selectOption}
        >
          <div className="title">Width</div>
          <FaAngleUp className="icon" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decksObj.decks
});

export default connect(
  mapStateToProps,
  { setSortOptions }
)(SortBy);
