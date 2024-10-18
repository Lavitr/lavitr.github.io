import { getNews } from '../index';

describe('actions', () => {
  it('should create an action to get news', () => {
    const expectedAction = {
      type: 'GET_NEWS'
    };
    expect(getNews()).toEqual(expectedAction);
  });
});