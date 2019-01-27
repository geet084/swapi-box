import React from 'react'
import { shallow } from 'enzyme'
import Display from './Display'

describe('Display', () => {
  let wrapper;

  it('should properly render default snapshot', () => {
    const mockChoice = ''
    const mockThing = { choice: mockChoice, vehicles: [] }
    wrapper = shallow(
      <Display
        choice={mockChoice}
        {...mockThing} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should properly render a chosen category', () => {
    const mockChoice = 'vehicles'
    const mockThing = [{}] 
    wrapper = shallow(
      <Display
        choice={mockChoice}
        selection={mockThing} />
    )

    expect(wrapper).toMatchSnapshot();
  })
})