import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReadingList from '../components/ReadingList';
import { removeBook } from '../features/readingList/readingListSlice';

const mockStore = configureStore([]);

describe('ReadingList', () => {
  it('renders reading list', async () => {
    const store = mockStore({
      readingList: [
        { id: 1, volumeInfo: { title: 'Book 1', authors: ['Author 1'] } },
      ],
    });

    render(
      <Provider store={store}>
        <ReadingList />
      </Provider>
    );

    const book1 = await screen.findByText(/Book 1/i);
    expect(book1).toBeInTheDocument()
    const author1 = await screen.findByText(/Author 1/i);
    expect(author1).toBeInTheDocument()

    
  });

  it('removes book from reading list', () => {
    const store = mockStore({
      readingList: [
        { id: 1, volumeInfo: { title: 'Book 1', authors: ['Author 1'] } },
      ],
    });

    render(
      <Provider store={store}>
        <ReadingList />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Add to reading List/i));
    const actions = store.getActions();
    expect(actions).toContainEqual(removeBook(1));
  });
});
