import React from 'react';
import {Link} from 'react-router-dom';

const CharacterDetail = props => {
  return (
    <div className="characterDetail">
      <Link to={`/`} className="card__btn__return">Volver</Link>
      <img
        className="img"
        src={props.characterObj.image}
        alt={props.characterObj.name}
      />
      <h2>{props.characterObj.name}</h2>
      <h3>Status: {props.characterObj.status}</h3>
      <h3>Spices: {props.characterObj.species}</h3>
      <h3>Origin: {props.characterObj.origin.name}</h3>
      <h3>Episodes: {props.characterObj.episode.length}</h3>
    </div>
  );
};

export default CharacterDetail;
