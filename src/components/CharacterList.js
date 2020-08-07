import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
  console.log (props);
  const charactersRendered = props.characterArray.map (singleCharacter => {
    return (
      <li key={singleCharacter.id}>
        <CharacterCard characterObj={singleCharacter} />
      </li>
    );
  });

  return (
    <ul class="charactersRendered">
      {charactersRendered}
    </ul>
  );
};

export default CharacterList;
