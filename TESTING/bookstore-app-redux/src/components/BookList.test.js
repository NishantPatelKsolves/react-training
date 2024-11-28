import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BookList from '../components/BookList';
import { fetchBooks } from '../features/books/booksSlice';

const mockStore = configureStore([]);

describe('BookList', () => {
  it('renders book list', () => {
    const store = mockStore({
      books: {
        books: [
          { id: 1, volumeInfo: { title: 'Book 1', authors: ['Author 1'] } },
        ],
        status: 'succeeded',
        filters: { category: '', author: '' },
      },
    });

    render(
      <Provider store={store}>
        <BookList />
      </Provider>
    );

    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('Author 1')).toBeInTheDocument();
  });

  it('dispatches fetchBooks on load', () => {
    const store = mockStore({
      books: { books: [], status: 'idle', filters: { category: '', author: '' } },
    });

    render(
      <Provider store={store}>
        <BookList />
      </Provider>
    );

    const actions = store.getActions();
    expect(actions).toContainEqual(fetchBooks('all'));
  });
});
