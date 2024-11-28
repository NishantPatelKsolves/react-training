import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


import App from './App';
import Counter from './components/Counter';
import Form from './components/Form';
import MockFunction from './components/MockFunction';
import MockAPI from './components/MockAPI';

describe('Advice Component',()=>{

  test('render advice app, test text', () => {
    render(<App advice='Be Kind!'/>);
    
    const ad = screen.getByText(/Be Kind!/i);// change string here and in render function to see tests fail
    expect(ad).toBeInTheDocument();
});

test('render button, test ROLE', () => {
  render(<App advice='Be Good!'/>);
  
  const ad = screen.getByText(/Be Good!/i);
  expect(ad).toBeInTheDocument();
  const btn = screen.getByRole('button', {name:/Click/i})
  expect(btn).toBeInTheDocument();
});

test('render button, test ID', () => {
  render(<App advice='Some advice!'/>);
  
  const ad = screen.getByText(/Some advice!/i);
  expect(ad).toBeInTheDocument();
  const btn = screen.getByTestId('advice-button')
  expect(btn).toBeInTheDocument();
});

})

describe('Counter Comp',()=>{

  test('Increment counter test', async()=>{
    render(<Counter/>);

    const incButton = screen.getByText(/Increment/i);
    userEvent.click(incButton);
    const countText =await screen.findByText(/Count: 1/i);// use findByText for values that might appear later, i.e. for async operations(state update)
    expect(countText).toBeInTheDocument()
  })

  test('Decrement counter test', async()=>{
    render(<Counter/>);

    const incButton = screen.getByText(/Decrement/i);
    userEvent.click(incButton);
    const countText =await screen.findByText(/Count: -1/i);
    expect(countText).toBeInTheDocument()
  })

})

describe('Form Comp',()=>{

  test('Submit Form test', async()=>{
    render(<Form/>);

    const input = screen.getByPlaceholderText(/Type something/i);
    const submit = screen.getByRole('button', {name: /submit/i});
    userEvent.type(input, 'Test type');
    userEvent.click(submit);
    const submitText =await screen.findByText(/Test type/i);// use findByText for values that might appear later, i.e. for async operations(state update)
    expect(submitText).toBeInTheDocument()
  })


})

describe('Mock Function Comp',()=>{

  test('Submit button test', async()=>{
    const mockFn = jest.fn();
    render(<MockFunction mockFn={mockFn}/>);

    const submit = screen.getByRole('button', {name: /Mock function Call/i});
    userEvent.click(submit);
    expect(mockFn).toHaveBeenCalledTimes(1);
  })
})

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve('Mocked Data'),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test('display fetched data test', async () => {
  render(<MockAPI />);

  const apiData = await screen.findByText(/Data: Mocked Data/i);
  expect(apiData).toBeInTheDocument()

  expect(global.fetch).toHaveBeenCalledWith('/api/data');
  expect(global.fetch).toHaveBeenCalledTimes(1); //optional
});