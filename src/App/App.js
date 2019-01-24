import React, { Component } from 'react';
import './App.scss';
import ScrollBox from '../ScrollBox/ScrollBox'
import Favorites from '../Favorites/Favorites'
import Nav from '../Nav/Nav'
import Display from '../Display/Display'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      activeChoice: '',
      people: [],
      planets: [],
      vehicles: []
    }
  }

  findRandomMovie = (movies) => {
    let maxNum = Math.floor(movies.length);
    let randomNumber = Math.floor(Math.random() * maxNum)

    return movies[randomNumber];
  }

  componentDidMount = () => {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(movies => this.findRandomMovie(movies.results))
      .then(movie => this.setState({ movie }))
  }

  fetchPeople = () => {
    let { people } = this.state;
    let pageNum = (people.length % 9) + 1;
    if (people.length < 87) {
      const url = 'https://swapi.co/api/people/?page='
    
      fetch(url + pageNum)
      .then(response => response.json())
      .then(peopleList => peopleList.results)
      .then(peopleWorlds => this.fetchWorldInfo(peopleWorlds))
      .then(peopleSpecies => this.fetchSpeciesInfo(peopleSpecies))
      .then(newPeople => {
        return this.setState({
          people: [...people, ...newPeople],
          activeChoice: 'people'
        })
      })
    }
  }

  fetchSpeciesInfo = (peeps) => {
    let updatedSpecies = peeps.map(peep => {
      if (peep.species.length === 0) {
        return ({ ...peep, spec: 'unknown' })
      } else {
        return fetch(peep.species)
          .then(response => response.json())
          .then(spec => ({ ...peep, spec: spec.name }))
      }
    })
    return Promise.all(updatedSpecies);
  }

  fetchWorldInfo = (people) => {
   let updatedPeople = people.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(world => {
          let { name, population } = world;
          return ({...person, world: name, population})
        })
   })
    return Promise.all(updatedPeople);

  }

  fetchPlanets = () => {
    // let { planets } = this.state;
    //LENGTH IS 61
    const url = 'https://swapi.co/api/planets/'

    fetch(url)
      .then(response => response.json())
      .then(planetList => planetList.results)
      // .then(planetRes => this.fetchResidents(planetRes))
      .then(planets => this.setState({ planets, activeChoice: 'planets' }))

  }

  // fetchResidents = (planets) => {
  //   let updatedPlanets = planets.map(planet => {
  //     let peeps = planet.residents.map(resident => {
  //       let thing = fetch(resident)
  //         .then(response => response.json())
  //         .then(res => ({ name: res.name }))
  //       return thing;
  //     })
  //     // planet.inhabitants = Promise.all(peeps)
  //     // console.log('dddddddd', planet)
  //     return planet
  //   })
  //   return updatedPlanets;
  // }

  fetchVehicles = () => {
    const url = 'https://swapi.co/api/vehicles/'

    fetch(url)
      .then(response => response.json())
      .then(vehicleList => vehicleList.results)
      .then(vehicles => this.setState({ vehicles, activeChoice: 'vehicles'}))
  }

  render() {
    let { movie, activeChoice } = this.state;

    if (movie !== {}) {
      return (
        <main className="App">
          <ScrollBox movie={movie.opening_crawl} />
          <p className="text">{movie.title}</p>
          <nav className="navigation">
            <Favorites />
            <Nav
              showPeople={this.fetchPeople}
              showPlanets={this.fetchPlanets}
              showVehicles={this.fetchVehicles}
            />
          </nav>
          <h4 className="text">DISPLAY AREA</h4>
          <Display choice={activeChoice} {...this.state} />
        </main>
      );
    } else {
      return <div>nothing to show</div>
    }
  }
}