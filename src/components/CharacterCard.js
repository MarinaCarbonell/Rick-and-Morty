import React from 'react';

const CharacterCard = props => {
  return (
    <div>
      <img
        className="img"
        src={props.characterObj.image}
        alt={props.characterObj.name}
      />
      <div className="characters">
        <h2>{props.characterObj.name}</h2>
        <h3>{props.characterObj.species}</h3>
      </div>
    </div>
  );
};

export default CharacterCard;
