import React from 'react'
import Header from './Header'
import 'regenerator-runtime'
import Enzyme,{ shallow } from 'enzyme'
import { Provider, Context } from '../../context/NewsContext'
import { create,act } from "react-test-renderer";
import { MemoryRouter } from 'react-router';
test('Mout Header component', () => {
  const dispatch = jest.fn();
  const callback = jest.fn();
  const wrapper = create(<Provider value={{
    fetch: (page,callback)=>{callback()}
  }}><MemoryRouter><Header /></MemoryRouter></Provider>)

  const instance = wrapper.toJSON();
  const eventMock = { preventDefault: jest.fn() };
  act(() => {
    instance.children[1].children[0].children[0].children[0].props.onClick(eventMock)
  })
  expect(wrapper.toJSON()).toMatchSnapshot();
})

