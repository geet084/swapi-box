import React from 'react'
import { shallow } from 'enzyme'
import ScrollBox from './ScrollBox'

const mockMovie = 'Some text to display here';

describe('ScrollBox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ScrollBox crawlText={mockMovie} />
    )
  })
  
  it('should properly render snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should receive correct props', () => {
    expect(wrapper.props().children).toEqual(mockMovie)
  })

})