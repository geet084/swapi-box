import React from 'react'
import { shallow } from 'enzyme'
import Icon from './Icon'

describe('Icon', () => {
  let wrapper
  let mockURL = ''
  let mockIcon = ''
  let mockGetInfo = jest.fn()
  let mockClasses = ''

  beforeEach(() => {
    wrapper = shallow(
      <Icon
        url={mockURL}
        choice={mockIcon}
        getInfo={mockGetInfo}
        classes={mockClasses}
      />
    )
  })

  it('should properly render default snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should register a click', () => {
    wrapper.find('input').simulate('click')
    expect(mockGetInfo).toHaveBeenCalled()
  })
})