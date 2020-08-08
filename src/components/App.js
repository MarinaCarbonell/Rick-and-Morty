import React from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import {Route, Switch} from 'react-router-dom';
import '../stylesheets/App.scss';
import logo from '../images/logo.png';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      charactersList: [],
      filterName: '',
    };
    this.handleFilters = this.handleFilters.bind (this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind (this);
  }

  componentDidMount () {
    fetch ('https://rickandmortyapi.com/api/character/')
      .then (response => response.json ())
      .then (data => {
        this.setState ({
          charactersList: data.results,
        });
      });
  }

  handleFilters (data) {
    this.setState ({
      filterName: data.filterInputName,
    });
  }

  renderCharacterDetail (props) {
    const routeCharacterId = props.match.params.characterId;
    const character = this.state.charactersList.find (
      character => character.id === parseInt (routeCharacterId)
    );
    if (character) {
      return <CharacterDetail characterObj={character} />;
    } else {
      return <p>Personaje no encontrado</p>;
    }
  }

  renderFilteredCharacters () {
    return this.state.charactersList.filter (character => {
      return character.name
        .toLowerCase ()
        .includes (this.state.filterName.toLowerCase ());
    });
  }

  render () {
    return (
      <div className="div">
        <Route exact path="/">
          <img className="logo" src={logo} alt="Rick and Morty" />
          <div className="App">
            <Filters
              filterName={this.state.filterName}
              handleFilters={this.handleFilters}
            />
            <CharacterList characterArray={this.renderFilteredCharacters ()} />
          </div>
        </Route>
        <Switch>
          <Route
            path="/detail/:characterId"
            render={this.renderCharacterDetail}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
