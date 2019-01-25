import React from 'react'
import { shallow } from 'enzyme'
import Favorites from './Favorites'

describe('Favorites', () => {
  let wrapper;
  const mockShowFavorites = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Favorites showFavorites={mockShowFavorites}/>
    )
  })

  it('should properly render snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should register a click on the button', () => {
    wrapper.find('.faves').simulate('click');
    expect(mockShowFavorites).toHaveBeenCalled();
  })

})