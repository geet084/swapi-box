const fetchFilms = async () => {
  const url = 'https://swapi.co/api/films/'
  let response = await fetch(url)
  let films = await response.json()

  return films.results.map(film => {
    return {
      title: film.title,
      crawlText: film.opening_crawl,
      date: film.release_date
    }
  })
}

const fetchSelection = async (selection) => {
  let url = 'https://swapi.co/api/'
  let response = await fetch(url + selection)
  
  return response.json()
}

const fetchWorldInfo = async (url) => {
  
  let response = await fetch(url)
  let world = await response.json()
  
  return { homeworld: world.name, population: world.population }
}

const fetchSpeciesInfo = async (url) => {
  let response = await fetch(url)
  let species = await response.json()

  return {species: species.name}
}

const fetchResidentInfo = async (inhabitants) => {
  let updatedResidents = inhabitants.map(async url => {
    let response = await fetch(url)
    let data = await response.json()
    return data.name
  })
  let residents = await Promise.all(updatedResidents)
  
  return { residents }
}

export {
  fetchFilms,
  fetchSelection,
  fetchWorldInfo,
  fetchSpeciesInfo,
  fetchResidentInfo
}