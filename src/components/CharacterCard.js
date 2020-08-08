import React from 'react';
import {Link} from 'react-router-dom';

const CharacterCard = props => {
  return (
    <div className="characterCard">
      <Link to={`detail/${props.characterObj.id}`} className="card__btn">
        <img
          className="img"
          src={props.characterObj.image}
          alt={props.characterObj.name}
        />
        <h2>{props.characterObj.name}</h2>
        <h3>{props.characterObj.species}</h3>
      </Link>
    </div>
  );
};

export default CharacterCard;
