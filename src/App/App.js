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
      url: 'https://swapi.co/api/',
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

  getMoreInfo = async () => {
    let { activeChoice, people, planets } = this.state

    if (activeChoice === 'people') {
      let worldInfo = await this.fetchWorldInfo();
      let speciesInfo = await this.fetchSpeciesInfo();
      let updatedPeople = people.map((person, i) => {
        return { ...person, ...worldInfo[i], ...speciesInfo[i] }
      })
      this.setState({ people: updatedPeople })
    }
    if (activeChoice === 'planets') {
      let residentInfo = await this.fetchResidentsInfo();
      let updatedPlanets = planets.map((planet, i) => {
        return { ...planet, ...residentInfo[i]}
      })
      this.setState({ planets: updatedPlanets })
    }
  }

  fetchSpeciesInfo = async () => {
    let updatedPeople = this.state.people.map(async person => {
      let response = await fetch(person.species)
      let species = await response.json()

      return ({spec: species.name})
    })
    return await Promise.all(updatedPeople)
  }

  fetchWorldInfo = async () => {
    let updatedPeople = this.state.people.map(async person => { 
      let response = await fetch(person.homeworld)
      let world = await response.json()
      let { name, population } = world;

      return ({world: name, population })
    })
    return await Promise.all(updatedPeople)
  }

  fetchResidentsInfo = async () => {
    let updatedPlanets = this.state.planets.map(async planet => {
      let residents = planet.residents.map(async resident => {
        let response = await fetch(resident)
        let person = await response.json()
        
        return await person.name
      })

      let inhabitants = await Promise.all(residents)
      return ({ inhabitants })
    })
    return Promise.all(updatedPlanets)
  }

  fetchApiInfo = async (e) => {
    let selection = e.target.name

    let response = await fetch(this.state.url + selection)
    let list = await response.json()
    let result = await list.results

    this.setState({
      [selection]: result,
      activeChoice: selection
    })
    await this.getMoreInfo()
  }

  showFavorites = () => {
    console.log('faves')
  }

  render() {
    let { movie, activeChoice } = this.state;

    if (movie !== {}) {
      return (
        <main className="App">
          <ScrollBox crawlText={movie.opening_crawl} />
          <p className="text">{movie.title}</p>
          <nav className="navigation">
            <Favorites showFavorites={this.showFavorites}/>
            <Nav fetchInfo={this.fetchApiInfo} />
          </nav>
          <Display choice={activeChoice} {...this.state} />
        </main>
      );
    } else {
      return <div>Oops, something went wrong!</div>
    }
  }
}