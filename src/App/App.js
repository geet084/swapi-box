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
      people: []
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
          people: [...people, ...newPeople]
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

  render() {
    let { movie, people } = this.state;

    if (movie !== {}) {
      return (
        <main className="App">
          <ScrollBox movie={movie.opening_crawl} />
          <p>{movie.title}</p>
          <Favorites />
          <Nav showMore={this.fetchPeople} />
          <Display people={people} />
        </main>
      );
    } else {
      return <div>nothing to show</div>
    }
  }
}