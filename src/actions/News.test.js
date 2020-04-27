import 'regenerator-runtime'
import React from 'react'
import {upVote,hideItem, fetch} from './News'
import Enzyme,{ mount } from 'enzyme'
import { create } from "react-test-renderer";
import {actions,storageKeys} from '../constants/default'
import yelp from '../api/yelp'
import {setLocalStorage} from '../services/LocalStorage'

describe('actions ', () => {
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

      afterEach(() => {
        localStorage.clear()
        
      })

    it('upVote', () => {
        const dispatch = jest.fn();
        const callback = jest.fn();
        upVote(dispatch)({id: 1, points: 1}, callback)
        expect(dispatch.mock.calls[0][0].type).toEqual(actions.UPVOTE)
        
    })

    it('hideItem', async() => {
        const dispatch = jest.fn();
        const callback = jest.fn();
        await hideItem(dispatch)(1, callback)
        expect(dispatch.mock.calls[0][0].type).toEqual(actions.HIDE_ITEM)
    })

    it('fetch fail', async() => {
        const dispatch = jest.fn();
        const callback = jest.fn();
        yelp.get = jest.fn((url) => {
            return Promise.reject('Error')
        });
        setLocalStorage(storageKeys.HIDDEN_ITEMS, ['22980673'])
        setLocalStorage(storageKeys.VOTED_ITEMS, [{id: '22980675', points: 1}])
        await fetch(dispatch)(1, callback)
        expect(dispatch.mock.calls[0][0].type).toEqual(actions.ERROR)
    })

    it('fetch sucess', async() => {
        const response = {
            data: {
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
            }
        }
        const dispatch = jest.fn();
        const callback = jest.fn();
        yelp.get = jest.fn((url) => {
            return Promise.resolve(response);
        });
        setLocalStorage(storageKeys.HIDDEN_ITEMS, ['22980673'])
        setLocalStorage(storageKeys.VOTED_ITEMS, [{id: '22980675', points: 1}])
        await fetch(dispatch)(1, callback)
        expect(dispatch.mock.calls[1][0].type).toEqual(actions.FETCH_NEWS)
        expect(callback.mock.calls[0][0]).toEqual(1)
    })



   
})

