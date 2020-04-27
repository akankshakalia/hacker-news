import React from 'react'
import 'regenerator-runtime'
import Enzyme,{ shallow, mount } from 'enzyme'
import News from './News'
import { Provider } from '../../context/NewsContext'
import { create } from "react-test-renderer";
test('Mount News Component', () => {
  
  const wrapper = create(<Provider value={
    {
      
      hits:[{
        created_at: "2020-04-25T19:29:55.000Z",
        title: "Liero can be played in browser now, for those who remember",
        url: "https://www.webliero.com/",
        author: "farseer",
        points: 51,
        num_comments: 11,
        objectID: "22980676"
      },{
        created_at: "2020-04-25T19:29:55.000Z",
        title: "Liero can be played in browser now, for those who remember",
        url: "https://www.webliero.com/",
        author: "farseer",
        points: 101,
        num_comments: 11,
        objectID: "22980675"
      },{
        created_at: "2020-04-25T19:29:55.000Z",
        title: "Liero can be played in browser now, for those who remember",
        url: "https://www.webliero.com/",
        author: "farseer",
        points: 76,
        num_comments: 11,
        objectID: "22980674"
      },{
        created_at: "2020-04-25T19:29:55.000Z",
        title: "Liero can be played in browser now, for those who remember",
        url: "https://www.webliero.com/",
        author: "farseer",
        points: 49,
        num_comments: 11,
        objectID: "22980673"
      }],
      page: 1,
      nbPages: 2,
      hitsPerPage: 10,
      error: {message: 'Network Error'},
      fetch:async(page,callback)=>{callback()}
    }}><News /></Provider>)

  expect(wrapper.toJSON()).toMatchSnapshot();
})
