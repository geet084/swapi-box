import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

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
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should have sad path snapshot', () => {
    wrapper.setState({movie: {}})
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    const expected = {
      url: 'https://swapi.co/api/',
      movie: {},
      activeChoice: '',
      people: [],
      planets: [],
      vehicles: []
    }
    expect(wrapper.state()).toEqual(expected)
  })

  it.skip('should find random movie', () => {

  })

  it.skip('should mount', () => {

  })

  it.skip('getMoreInfo', () => {

  })

  it.skip('fetchSpeciesInfo', () => {

  })

  it.skip('fetchWorldInfo', () => {

  })

  it.skip('fetchResidentsInfo', () => {

  })

  it.skip('fetchAPIInfo', () => {

  })
})
