import React from 'react'
import 'regenerator-runtime'
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{ shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });
test('Mout App component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot();
})

