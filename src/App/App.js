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
    let { url } = this.state
    let movies = await this.fetchApiInfo(url + 'films/')
    let movie = this.findRandomMovie(movies.results)
    this.setState({ movie })
  }

  getInfo = async (e) => {
    let selection = e.target.name
    let { url } = this.state
    let data = await this.fetchApiInfo(url + selection)
    
    this.setState({
      [selection]: data.results,
      activeChoice: selection
    }, this.getMoreInfo)
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
      let species = await this.fetchApiInfo(person.species)

      return ({spec: species.name})
    })
    return await Promise.all(updatedPeople)
  }

  fetchWorldInfo = async () => {
    let updatedPeople = this.state.people.map(async person => { 
      let world = await this.fetchApiInfo(person.homeworld)
      
      return ({world: world.name, population: world.population })
    })
    return await Promise.all(updatedPeople)
  }

  fetchResidentsInfo = async () => {
    let updatedPlanets = this.state.planets.map(async planet => {
      let residents = planet.residents.map(async resident => {
        let person = await this.fetchApiInfo(resident)
        
        return person.name
      })
      let inhabitants = await Promise.all(residents)
      return ({ inhabitants })
    })
    return Promise.all(updatedPlanets)
  }

  fetchApiInfo = async (url) => {
    let response = await fetch(url)
    return await response.json()
  }

  showFavorites = (e) => {
    let selection = e.target.name
    console.log(selection)
    this.setState({ activeChoice: selection })
  }

  render() {
    let { movie, activeChoice, favorites } = this.state;

    if (movie !== {}) {
      return (
        <main className="App">
          <ScrollBox
            crawlText={movie.opening_crawl}
            title={movie.title}
            date={movie.release_date}
          />
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
            {...this.state} 
            />
        </main>
      );
    } else {
      return <div>Oops, something went wrong!</div>
    }
  }
}