import React from 'react'
import NewsItem from './NewsItem'
import Enzyme,{ mount } from 'enzyme'
import { create } from "react-test-renderer";
describe('newitem component', () => {
    const hits = [{
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
      }]
    it('Mout NewsItem component 50 points', () => {
        const wrapper = create(<NewsItem item={hits[0]}/>)
        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    it('Mout NewsItem component 75 points', () => {
        const wrapper = create(<NewsItem item={hits[1]}/>)
        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    it('Mout NewsItem component 100 points', () => {
        const wrapper = create(<NewsItem item={hits[2]}/>)
        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    it('Mout NewsItem component 25 points', () => {
        const wrapper = create(<NewsItem item={hits[3]}/>)
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})

