import React from 'react'
import * as Api from './Api'

describe('Api', () => {


  it('should fetch films', async () => {
    let mockMovie = {
      results:
        [{ opening_crawl: 'text', release_date: 'date', title: 'title' }]
    }
    let expected = [{ crawlText: 'text', date: 'date', title: 'title' }]
    let url = 'https://swapi.co/api/films/'
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockMovie)
    }))
    
    let result = await Api.fetchFilms(mockMovie)
    

    expect(window.fetch).toHaveBeenCalledWith(url)
    expect(result).toEqual(expected)
  })

  it('should fetch selection', async () => {
    let mockSelection = {results:
      [{name: 'thing'}, {name: 'stuff'}]}
    let url = 'https://swapi.co/api/'
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      // json: () => Promise.resolve(mockSelection)
      //TODO:SEEMS LIKE THIS SHOULD BE DIFFERENT??
      json: () => Promise.resolve('people')
    }))
    let result = await Api.fetchSelection('people')
    expect(window.fetch).toHaveBeenCalledWith(url + 'people')
    expect(result).toEqual('people')

  })

  it('should fetch world info', async () => {
    let mockWorld = { name: 'mars', population: 99 }
    let url = 'https://swapi.co/api/planets/2/'
    let expected = {homeworld: 'mars', population: 99}

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockWorld)
    }))
    let result = await Api.fetchWorldInfo(url)

    expect(window.fetch).toHaveBeenCalledWith(url)
    expect(result).toEqual(expected)
  })

  it('should fetch species info', async () => {
    let mockSpecies = { name: 'martian'  }
    let url = 'https://swapi.co/api/species/2/'
    let expected = { species: 'martian' }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockSpecies)
    }))
    let result = await Api.fetchSpeciesInfo(url)

    expect(window.fetch).toHaveBeenCalledWith(url)
    expect(result).toEqual(expected)
  })

  it('should fetch resident info', async () => {
    let mockRes1 = { name: 'person1' }
    let url = "https://swapi.co/api/people/22/"
    let urls = ["https://swapi.co/api/people/22/"]
    let expected = {residents: ['person1']}

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockRes1)
    }))
    let result = await Api.fetchResidentInfo(urls)

    expect(window.fetch).toHaveBeenCalledWith(url)
    expect(result).toEqual(expected)
  })

})