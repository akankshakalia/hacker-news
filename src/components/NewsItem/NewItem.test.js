import React from 'react'
import NewsItem from './NewsItem'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme,{ shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });
test('Mout NewsItem component', () => {
    const props = {
        "created_at": "2020-04-25T19:29:55.000Z",
        "title": "Liero can be played in browser now, for those who remember",
        "url": "https://www.webliero.com/",
        "author": "farseer",
        "points": 51,
        "num_comments": 11,
        "objectID": "22980676"
    }
  const wrapper = shallow(<NewsItem item={props}/>)
  expect(wrapper).toMatchSnapshot();
})

