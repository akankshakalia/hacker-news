import React from 'react'
import { create } from "react-test-renderer";
import 'regenerator-runtime'
import Enzyme,{ shallow } from 'enzyme'
import LineChart from './LineChart'
import { Provider } from '../../context/NewsContext'

test('Mout LineChart component', () => {
   const context = { state: {hits: [] } };
  const wrapper = create(<Provider><LineChart /></Provider>, { context })
  expect(wrapper.toJSON()).toMatchSnapshot();
})

