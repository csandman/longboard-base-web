import React from 'react';
import { Link } from 'react-router-dom';
import './DeckThumbnail.scss';

const DeckThumbnail = (props) => {
  let brand = props.deck.brand.replace(/\s/g,'').toLowerCase();
  let imgSrc = `https://dqsa52xlu6vay.cloudfront.net/images/decks/${brand}/thumbs/${props.deck.fileName}Thumb.png`;
  let pageLink = './' + brand + '/' + props.deck.fileName;

  const componentClasses = ['thumbnail'];
  if (props.show) { componentClasses.push('show'); }

  return (
    <div className={componentClasses.join(' ')}>
      <Link to={pageLink}></Link>
      <div className="imgContainer">
        <img src={imgSrc} alt=""/>
      </div>
      <h3>{props.deck.deckName}</h3>
    </div>
  );
}

export default DeckThumbnail;
