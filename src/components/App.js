import React from 'react';
import CharacterList from './CharacterList';
import '../stylesheets/App.scss';
import logo from '../images/logo.png';

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
      <body>
        <img src={logo} alt="Rick and Morty" />
        <div className="App">
          <CharacterList characterArray={this.state.characterList} />
        </div>
      </body>
    );
  }
}

export default App;
