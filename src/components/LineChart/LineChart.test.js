import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import 'regenerator-runtime'
import Enzyme,{ shallow } from 'enzyme'
import LineChart from './LineChart'
import { Provider } from '../../context/NewsContext'
Enzyme.configure({ adapter: new Adapter() });
test('Mout LineChart component', () => {
   const context = { state: {hits: [] } };
  const wrapper = shallow(<Provider><LineChart /></Provider>, { context })
  expect(wrapper).toMatchSnapshot();
})

