import React from 'react';
import '../stylesheets/CharacterDetail.scss';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

const CharacterDetail = props => {
  const getStatusImg = status => {
    if (status === 'Dead') {
      return <i class="fas fa-skull" />;
    } else if (status === 'Alive') {
      return <i class="fas fa-smile" />;
    } else {
      return <i class="fas fa-question-circle" />;
    }
  };

  const getSpecieImg = specie => {
    if (specie === 'Alien') {
      return <i class="fab fa-reddit-alien" />;
    } else if (specie === 'Human') {
      return <i class="fas fa-male" />;
    } else {
      return <i class="fas fa-question-circle" />;
    }
  };

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
          <h3>
            Status:
            {' '}
            {props.characterObj.status}
            {' '}
            {getStatusImg (props.characterObj.status)}
          </h3>
          <h3>
            Spices:
            {' '}
            {props.characterObj.species}
            {' '}
            {getSpecieImg (props.characterObj.species)}
            {' '}
          </h3>
          <h3>Origin: {props.characterObj.origin.name}</h3>
          <h3>Episodes: {props.characterObj.episode.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
