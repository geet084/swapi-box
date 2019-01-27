import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  let wrapper;

  it('should properly render snapshot', () => {
    const mockChoice = 'people';
    const mockSelection = {name: 'hello'};
    wrapper = shallow(
      <Card choice={mockChoice} {...mockSelection} />
    )
    wrapper.setProps({choice: 'people'})
    expect(wrapper).toMatchSnapshot()
  })

  it('should properly render snapshot', () => {
    const mockChoice = 'planets';
    const mockSelection = { name: 'hello', residents: ['bob'] };
    wrapper = shallow(
      <Card choice={mockChoice} {...mockSelection} />
    )
    wrapper.setProps({ choice: 'planets' })
    expect(wrapper).toMatchSnapshot()
  })

  it('should properly render snapshot', () => {
    const mockChoice = 'vehicles';
    const mockSelection = { name: 'hello' };
    wrapper = shallow(
      <Card choice={mockChoice} {...mockSelection} />
    )
    wrapper.setProps({ choice: 'vehicles' })
    expect(wrapper).toMatchSnapshot()
  })

})