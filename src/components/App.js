import React from 'react';
import CharacterList from './CharacterList';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      characterList: [],
    };
  }

  componentDidMount () {
    fetch ('https://rickandmortyapi.com/api/character/')
      .then (response => response.json ())
      .then (data => {
        this.setState ({
          characterList: data.results,
        });
      });
  }

  handleChangeInput (inputValueFromChild) {
    this.setState ({
      inputValue: inputValueFromChild,
    });
  }

  render () {
    return (
      <div className="App">
        <CharacterList characterArray={this.state.characterList} />
      </div>
    );
  }
}

export default App;
