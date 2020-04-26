import React from 'react'
import 'regenerator-runtime'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{ shallow, mount } from 'enzyme'
import News from './News'
import { Provider } from '../../context/NewsContext'
Enzyme.configure({ adapter: new Adapter() });
test('Mount News Component', () => {
  const wrapper = mount(<Provider><News /></Provider>)
  expect(wrapper).toMatchSnapshot();
})
