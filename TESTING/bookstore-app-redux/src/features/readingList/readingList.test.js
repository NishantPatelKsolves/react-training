import readingListReducer, { addBook, removeBook } from './readingListSlice.js';

describe('readingListSlice', () => {
  const initialState = [];

  it('should return the initial state', () => {
    expect(readingListReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle addBook', () => {
    const book = { id: 1, volumeInfo: { title: 'Book' } };
    const action = addBook(book);
    const newState = readingListReducer(initialState, action);
    expect(newState).toContainEqual(book);
  });

  it('should handle removeBook', () => {
    const book = { id: 1, volumeInfo: { title: 'Book' } };
    const state = [book];
    const action = removeBook(1);
    const newState = readingListReducer(state, action);
    expect(newState).toEqual([]);
  });
});
