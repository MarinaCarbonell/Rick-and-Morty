import React from 'react';

const CharacterCard = props => {
  return (
    <div class="characterCard">
      <img
        className="img"
        src={props.characterObj.image}
        alt={props.characterObj.name}
      />
      <h2>{props.characterObj.name}</h2>
      <h3>{props.characterObj.species}</h3>
    </div>
  );
};

export default CharacterCard;
