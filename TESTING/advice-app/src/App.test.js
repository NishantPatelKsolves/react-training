import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          slip: { advice: 'Be Kind!' },
        }),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
  jest.useRealTimers();

});

describe('Advice App', () => {

  test('fetches and displays advice on mount TEST', async () => {
    render(<App />);

  const adviceData = await screen.findByText(/Be Kind!/i);
  expect(adviceData).toBeInTheDocument()

    //expect(global.fetch).toHaveBeenCalledWith('https://api.adviceslip.com/advice');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test('fetches new advice and increments count on button click', async () => {
    render(<App />);

    //initial advice
    const adviceData = await screen.findByText(/Be Kind!/i);
    expect(adviceData).toBeInTheDocument()

    //button click
    const button = screen.getByText(/get advice/i);
    fireEvent.click(button);

    //new advice
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));

    //verify
    expect(screen.getByText(/count 1/i)).toBeInTheDocument();
  });

  test('updates timer every second', async () => {
    jest.useFakeTimers();

    render(<App />);

    const initialTime = screen.getByText(/Timer: .+/i).textContent;

    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      const updatedTime = screen.getByText(/timer: .+/i).textContent;
      expect(updatedTime).not.toBe(initialTime);
    });
  });


  
  }
);