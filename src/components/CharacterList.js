import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
  const charactersRendered = props.characterArray.map (singleCharacter => {
    return (
      <li key={singleCharacter.id}>
        <CharacterCard characterObj={singleCharacter} />
      </li>
    );
  });

  return (
    <ul className="charactersRendered">
      {charactersRendered}
    </ul>
  );
};

export default CharacterList;
