import React from 'react';
import '../stylesheets/CharacterDetail.scss';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

const CharacterDetail = props => {
  return (
    <div className="character__detail">
      <img className="logo" src={logo} alt="Rick and Morty" />
      <Link to={`/`} className="card__btn__return">Volver</Link>
      <div className="character__detail__content">
        <img
          className="character__detail__content__img"
          src={props.characterObj.image}
          alt={props.characterObj.name}
        />
        <div className="character__detail__content__properties">
          <h2>{props.characterObj.name}</h2>
          <h3>Status: {props.characterObj.status}</h3>
          <h3>Spices: {props.characterObj.species}</h3>
          <h3>Origin: {props.characterObj.origin.name}</h3>
          <h3>Episodes: {props.characterObj.episode.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
