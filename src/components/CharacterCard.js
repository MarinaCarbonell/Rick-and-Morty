import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/CharacterCard.scss';

const CharacterCard = props => {
  return (
    <div className="character__card">
      <Link to={`detail/${props.characterObj.id}`} className="card__btn">
        <img
          className="character__img"
          src={props.characterObj.image}
          alt={props.characterObj.name}
        />
        <div className="character__properties">
          <h2 className="character__name">{props.characterObj.name}</h2>
          <h3 className="character__species">{props.characterObj.species}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
