import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterList.scss';

const CharacterList = props => {
  if (props.characterArray.length === 0) {
    return (
      <p>
        No hay ningún personaje que coincida con la palabra {props.filterName}
      </p>
    );
  } else {
    const charactersRendered = props.characterArray.map (singleCharacter => {
      return (
        <li key={singleCharacter.id}>
          <CharacterCard characterObj={singleCharacter} />
        </li>
      );
    });

    return (
      <ul className="characters__rendered">
        {charactersRendered}
      </ul>
    );
  }
};

export default CharacterList;
