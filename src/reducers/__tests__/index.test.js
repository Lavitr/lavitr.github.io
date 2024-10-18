import reducer from '../index';

describe('news reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle GET_NEWS', () => {
    expect(
      reducer({}, {
        type: 'GET_NEWS'
      })
    ).toEqual({
      loading: true
    });
  });

  it('should handle NEWS_RECEIVED', () => {
    const mockNews = { title: 'Test News' };
    expect(
      reducer({}, {
        type: 'NEWS_RECEIVED',
        json: [mockNews]
      })
    ).toEqual({
      news: mockNews,
      loading: false
    });
  });
});