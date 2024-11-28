import { render, screen } from '@testing-library/react';
import App from './App';
import { sumArr } from './util';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Sum of arr of ele", ()=>{
  expect(sumArr([10,10,10])).toBe(30);
})

test("Sum of negative ele", ()=>{
  expect(sumArr([-10,-10,-10])).toBe(-30);
})

test("Sum of empty", ()=>{
  expect(sumArr([])).toBe(0);
})


