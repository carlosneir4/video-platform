import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Header from './Header'

configure({
  adapter: new Adapter()
})

describe('Testing Component <Header />', () => {
    test('should Snapshot met', () => {

        const wrapper = shallow(<Header />)
        expect(toJson(wrapper)).toMatchSnapshot()
      });
});