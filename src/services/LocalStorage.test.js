import expect from 'expect';
import {updatePage, getHiddenItems, getPage, getVotedItems,hideNews, upVote, getLocalStorage, setLocalStorage} from './LocalStorage';
import {storageKeys} from '../constants/default'
describe('local storage', () => {
  afterEach(() => {
    localStorage.clear()
  })
  it('updatePage', () => {
    updatePage(1)
    expect(getLocalStorage(storageKeys.PAGE)).toEqual({num: 1});
  });

  it('getPage null', () => {
    expect(getPage()).toEqual(1);
  });

  it('getPage from storage', () => {
    setLocalStorage(storageKeys.PAGE, {num: 2})
    expect(getPage()).toEqual(2);
  });

  it('getHiddenItems', () => {
    expect(getHiddenItems()).toEqual([]);
  });

  it('getHiddenItems from storage', () => {
    setLocalStorage(storageKeys.HIDDEN_ITEMS, [1])
    expect(getHiddenItems()).toEqual([1]);
  });

  it('getVotedItems', () => {
    expect(getVotedItems()).toEqual([]);
  });

  it('getVotedItems from storage', () => {
    const data = [{id: 1, points: 1}];
    setLocalStorage(storageKeys.VOTED_ITEMS, data)
    expect(getVotedItems()).toEqual(data);
  });

  it('hideNews empty', () => {
    expect(hideNews(1)).toEqual(1);
  }); 
  
  it('hideNews duplicate', () => {
    setLocalStorage(storageKeys.HIDDEN_ITEMS, [1])
    expect(hideNews(1)).toEqual(1);
  });

  it('upVote empty', () => {
    expect(upVote(1)).toEqual({id: 1, points: 1});
  });

  it('upVote points add', () => {
    setLocalStorage(storageKeys.VOTED_ITEMS, [{id: 1, points: 1}])
    expect(upVote(1)).toEqual({id: 1, points: 2});
  });


  
});