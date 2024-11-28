import booksReducer, { fetchBooks, setCategoryFilter, setAuthorFilter } from './booksSlice';

describe('booksSlice', () => {
  const initialState = {
    books: [],
    status: 'idle',
    error: null,
    filters: { category: '', author: '' },
  };

  it('should return the initial state', () => {
    expect(booksReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setCategoryFilter', () => {
    const action = setCategoryFilter('Fiction');
    const newState = booksReducer(initialState, action);
    expect(newState.filters.category).toBe('Fiction');
  });

  it('should handle setAuthorFilter', () => {
    const action = setAuthorFilter('Author Name');
    const newState = booksReducer(initialState, action);
    expect(newState.filters.author).toBe('Author Name');
  });

  it('should handle fetchBooks.pending', () => {
    const action = { type: fetchBooks.pending.type };
    const newState = booksReducer(initialState, action);
    expect(newState.status).toBe('loading');
  });

  it('should handle fetchBooks.fulfilled', () => {
    const action = { type: fetchBooks.fulfilled.type, payload: [{ id: 1, volumeInfo: { title: 'Book' } }] };
    const newState = booksReducer(initialState, action);
    expect(newState.status).toBe('succeeded');
    expect(newState.books).toHaveLength(1);
  });

  it('should handle fetchBooks.rejected', () => {
    const action = { type: fetchBooks.rejected.type, error: { message: 'Failed' } };
    const newState = booksReducer(initialState, action);
    expect(newState.status).toBe('failed');
    expect(newState.error).toBe('Failed');
  });
});
