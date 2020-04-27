import expect from 'expect';
import {newsReducer} from './News';
import {actions} from '../constants/default';

describe('news reducer', () => {
    const state = {
        hits:[{
        "created_at": "2020-04-25T19:29:55.000Z",
        "title": "Liero can be played in browser now, for those who remember",
        "url": "https://www.webliero.com/",
        "author": "farseer",
        "points": 51,
        "num_comments": 11,
        "objectID": "22980676"}],
        page: 1,
        nbPages: 2,
        hitsPerPage: 10,
        error: null
    }
  it('should return the initial state', () => {
    expect(newsReducer(undefined, {})).toEqual(undefined);
  });

  it('should handle ERROR', () => {
      const error = {errormessage: 'Error'}
    const action = {
      type: actions.ERROR,
      payload: error
    };
    expect(newsReducer({}, action)).toEqual({error});
  });

  it('should handle UPVOTE', () => {
   const payload = {
       id: '22980676',
       points: 1
   }
   const expected = {
    hits:[{
    "created_at": "2020-04-25T19:29:55.000Z",
    "title": "Liero can be played in browser now, for those who remember",
    "url": "https://www.webliero.com/",
    "author": "farseer",
    "points": 52,
    "num_comments": 11,
    "objectID": "22980676"}],
    page: 1,
    nbPages: 2,
    hitsPerPage: 10,
    error: null
}
    const action = {
        type: actions.UPVOTE,
        payload
    };
    expect(newsReducer(state, action)).toEqual(expected);
    });

  it('should handle HIDE_ITEM', () => {
    const expected = {
        hits:[],
        page: 1,
        nbPages: 2,
        hitsPerPage: 10,
        error: null

    }
    const action = {
        type: actions.HIDE_ITEM,
        payload: '22980676'
    };
    expect(newsReducer(state, action)).toEqual(expected);
});

  it('should handle FETCH_NEWS', () => {

    const action = {
      type: actions.FETCH_NEWS,
      payload: state
    };
    expect(newsReducer({}, action)).toEqual(state);
  });

  
});