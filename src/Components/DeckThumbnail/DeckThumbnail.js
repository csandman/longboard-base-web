import React from 'react';
import { Link } from 'react-router-dom';
import './DeckThumbnail.css';

const DeckThumbnail = (props) => {
  let brand = props.deck.brand.replace(/\s/g,'').toLowerCase();
  // let imgSrc = props.images.find(el => el.includes(props.deck.fileName+'Thumb'));
  let pageLink = './' + brand + '/' + props.deck.fileName;

  const componentClasses = ['thumbnail'];
  if (props.show) { componentClasses.push('show'); }

  return (
    <div className={componentClasses.join(' ')}>
      <Link to={pageLink}></Link>
      <div className="imgContainer">
        <img src="./" alt=""/>
      </div>
      <h3>{props.deck.deckName}</h3>
    </div>
  );
}

export default DeckThumbnail;
