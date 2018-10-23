import React from "react";
import { Link } from "react-router-dom";
import "./DeckThumbnail.scss";

const DeckThumbnail = props => {
  let brand = ""
  if (props.deck.brand) {
    brand = props.deck.brand.replace(/\s/g, "").toLowerCase();
  }
  
  let imgSrc = `https://dqsa52xlu6vay.cloudfront.net/images/decks/${brand}/thumbs/${
    props.deck.fileName
  }Thumb.png`;
  let pageLink = "/decks/" + brand + "/" + props.deck.fileName;

  const componentClasses = ["thumbnail-link"];
  if (props.show) {
    componentClasses.push("show");
  }

  return (
    <Link className={componentClasses.join(" ")} to={pageLink}>
      <div className="thumbnail">
        <img src={imgSrc} alt="" />
        <h3>{props.deck.deckName}</h3>
      </div>
    </Link>
  );
};

export default DeckThumbnail;
