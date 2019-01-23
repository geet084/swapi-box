import React, { Component } from 'react';
import './App.scss';
import ScrollBox from '../ScrollBox/scrollBox'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount = () => {
    fetch('https://swapi.co/api/films/')
      .then(data => data.json())
      .then(data => this.setState({ movies: data.results }))
  }

  showRandomMovie = () => {
    const { movies } = this.state;
    let maxNum = Math.floor(movies.length);
    let randomNumber = Math.floor(Math.random() * maxNum)

    return movies[randomNumber].opening_crawl;
  }

  render() {
    
    if (this.state.movies.length > 0) {
      return (
        <div className="App">
          <ScrollBox movie={this.showRandomMovie()}/>
          <h2>SWAPI BOX</h2>
        </div>
      );
    } else {
      return <div>nothing to show</div>
    }
  }
}