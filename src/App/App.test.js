import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import * as Api from '../Api/Api'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <App  />
    )
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should properly match snapshot', () => {
    wrapper.setState({ scrollMovie: {title: 'not empty'} })
    expect(wrapper).toMatchSnapshot()
  })

  it('should display oops when movie is not fetched', () => {
    wrapper.setState({ scrollMovie: {} })
    expect(wrapper).toMatchSnapshot()

  })

  it('should have a default state', () => {
    const expected = {
      scrollMovie: {},
      activeChoice: '',
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    }
    expect(wrapper.state()).toEqual(expected)
  })

  it('should get one movie to display crawl text', async () => {
    let mockFilms = [{movie1: '1'}]
    Api.fetchFilms = jest.fn(() => mockFilms)
    expect(wrapper.state('scrollMovie')).toEqual({})

    await wrapper.instance().getScrollMovie()
    
    expect(wrapper.state('scrollMovie')).toEqual({ movie1: '1' })
  })



  it.skip('should get PEOPLE info when that category is clicked', async () => {
    let mockEvent = { target: { name: 'people' } }
    let mockFilms = { results: [{ name: 'bert', things: 'stuff', extra: 'fluff' }] }
    let mockInfo = [{ name: 'bert', things: 'stuff', extra: 'fluff' }]
    Api.fetchSelection = await jest.fn(() => mockFilms)
    App.getPeopleInfo = await jest.fn(() => mockInfo)

    expect(wrapper.state('people')).toEqual([])
    await wrapper.instance().getInfo(mockEvent)

    await expect(wrapper.state('activeChoice')).toEqual(['a'])

  })

  it('should get people info', async () => {
    let mockPeople = [{name: 'bert', things: 'stuff', extra: 'fluff'}]
    let mockWorldInfo = { homeworld: 'earth', population: 1 }
    let mockSpeciesInfo = { species: 'human' }
    let expected = [{name: 'bert', homeworld: 'earth', population: 1, species: 'human'}]
    Api.fetchWorldInfo = jest.fn(() => mockWorldInfo)
    Api.fetchSpeciesInfo = jest.fn(() => mockSpeciesInfo)
    let result = await wrapper.instance().getPeopleInfo(mockPeople)

    expect(result).toEqual(expected)

  })

  it('should get planet info', async () => {
    let mockPlanet = [{ name: 'earth', climate: 'cold', population: 2, terrain: 'rough', extra: 22, stuff: 'that I dont need'}]
    let mockResidentInfo = { residents: 'yoda' }
    let expected = [{ name: 'earth', climate: 'cold', population: 2, terrain: 'rough', residents: 'yoda' }]
    Api.fetchResidentInfo = jest.fn(() => mockResidentInfo)

    let result = await wrapper.instance().getPlanetInfo(mockPlanet)

    expect(result).toEqual(expected)

  })


  it('should only return needed vehicle info', () => {
    let begin = [{ other: 'not needed', name: 'name', model: 'model', vehicle_class: 'class', passengers: 'pass' }]
    let expected = [{ name: 'name', model: 'model', vehicle_class: 'class', passengers: 'pass' }]
    let result = wrapper.instance().getVehicleInfo(begin)

    expect(result).toEqual(expected)

  })

})
