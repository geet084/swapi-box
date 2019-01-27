import React from 'react'
import { shallow } from 'enzyme'
import Nav from './Nav'

describe('Nav', () => {
  let wrapper;
  const mockFetchInfo = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Nav fetchInfo={mockFetchInfo}/>
    )
  })

  it('should properly render snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})