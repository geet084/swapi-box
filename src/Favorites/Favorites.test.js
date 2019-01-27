import React from 'react'
import { shallow } from 'enzyme'
import Favorites from './Favorites'

describe('Favorites', () => {
  let wrapper;
  const mockNewScroll = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Favorites newScroll={mockNewScroll}/>
    )
  })

  it('should properly render snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should register a click on the button', () => {
    wrapper.find('.swapi').simulate('click');
    expect(mockNewScroll).toHaveBeenCalled();
  })

})