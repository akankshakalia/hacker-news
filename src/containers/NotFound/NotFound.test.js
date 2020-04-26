import React from 'react'
import NotFound from './NotFound'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{ shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });
test('Mout NotFound component', () => {
  const wrapper = shallow(<NotFound />)
  expect(wrapper).toMatchSnapshot();
})

