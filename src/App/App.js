import React, { Component } from 'react';
import './App.scss';
import ScrollBox from '../ScrollBox/ScrollBox'
import Favorites from '../Favorites/Favorites'
import Nav from '../Nav/Nav'
import Display from '../Display/Display'
import { fetchFilms, fetchSelection, fetchWorldInfo, fetchSpeciesInfo, fetchResidentInfo } from '../Api/Api'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollMovie: {},
      activeChoice: '',
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    }
  }

  findRandomMovie = (movies) => {
    let maxNum = Math.floor(movies.length);
    let randomNumber = Math.floor(Math.random() * maxNum)

    return movies[randomNumber];
  }

  componentDidMount = async () => {
    let movies = await fetchFilms()
    let scrollMovie = this.findRandomMovie(movies)
    this.setState({ scrollMovie })
  }

  getInfo = async (e) => {
    let selection = e.target.name
    let data = await fetchSelection(selection)
    let updatedChoice;

    if (selection === 'people') {
      updatedChoice = await this.getPeopleInfo(data.results);
    } else if (selection === 'planets') {
      updatedChoice = await this.getPlanetInfo(data.results);
    } else {
      updatedChoice = this.getVehicleInfo(data.results);
    }

    this.setState({
      [selection]: updatedChoice,
      activeChoice: selection
    })
  }

  async getPeopleInfo(people) {
    let updatedPeople = people.map(async (person) => {
      let worldInfo = await fetchWorldInfo(person.homeworld);
      let speciesInfo = await fetchSpeciesInfo(person.species);

      return {
        name: person.name,
        homeworld: person.homeworld,
        population: person.population,
        species: person.species,
        ...worldInfo, ...speciesInfo
      };
    });
    return Promise.all(updatedPeople);
  }

  async getPlanetInfo(planets) {
    let updatedPlanets = planets.map(async (planet) => {
      let planetInfo = await fetchResidentInfo(planet.residents);

      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: planetInfo.residents
      };
    });
    return Promise.all(updatedPlanets);
  }

  getVehicleInfo = (vehicles) => {
    return vehicles.map(vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        vehicle_class: vehicle.vehicle_class,
        passengers: vehicle.passengers
      }
    })
  }

  render() {
    let { scrollMovie, activeChoice, favorites } = this.state;
  
    if (scrollMovie !== {}) {
      return (
        <main className="App">
          <ScrollBox {...scrollMovie} />
          <nav className="navigation">
            <Favorites
              showFavorites={this.showFavorites}
              active={activeChoice}
              numFaves={favorites.length}
              newScroll={this.componentDidMount}
            />
            <Nav
              getInfo={this.getInfo}
              choice={activeChoice}
            />
          </nav>
          <Display
            choice={activeChoice}
            selection={this.state[activeChoice]} 
            />
        </main>
      );
    } else {
      return <div>Oops, something went wrong!</div>
    }
  }
}