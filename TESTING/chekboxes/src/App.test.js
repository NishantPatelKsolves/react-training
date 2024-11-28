import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Parent checkbox checks all child checkboxes',()=>{
  render(<App/>);

  const parentCheckbox = screen.getByLabelText(/Select All/i);
  const child1 = screen.getByLabelText(/Select One/i);
  const child2 = screen.getByLabelText(/Select Two/i);
  const child3 = screen.getByLabelText(/Select Three/i);
  const child4 = screen.getByLabelText(/Select Four/i);
  const child5 = screen.getByLabelText(/Select Five/i);

  //on checking parent, all child should be checked
  fireEvent.click(parentCheckbox);
  expect(parentCheckbox).toBeChecked();
  expect(child1).toBeChecked();
  expect(child2).toBeChecked();
  expect(child3).toBeChecked();
  expect(child4).toBeChecked();
  expect(child5).toBeChecked();
})


test('Uncheck parent unchecks all child checkboxes',()=>{
  render(<App/>);

  const parentCheckbox = screen.getByLabelText(/Select All/i);
  const child1 = screen.getByLabelText(/Select One/i);
  const child2 = screen.getByLabelText(/Select Two/i);
  const child3 = screen.getByLabelText(/Select Three/i);
  const child4 = screen.getByLabelText(/Select Four/i);
  const child5 = screen.getByLabelText(/Select Five/i);

  fireEvent.click(parentCheckbox);
  fireEvent.click(parentCheckbox);// twice for check then uncheck
  expect(parentCheckbox).not.toBeChecked();
  expect(child1).not.toBeChecked();
  expect(child2).not.toBeChecked();
  expect(child3).not.toBeChecked();
  expect(child4).not.toBeChecked();
  expect(child5).not.toBeChecked();
})


test('Check all child checkboxes then parent is checked',()=>{
  render(<App/>);

  const parentCheckbox = screen.getByLabelText(/Select All/i);
  const child1 = screen.getByLabelText(/Select One/i);
  const child2 = screen.getByLabelText(/Select Two/i);
  const child3 = screen.getByLabelText(/Select Three/i);
  const child4 = screen.getByLabelText(/Select Four/i);
  const child5 = screen.getByLabelText(/Select Five/i);

  fireEvent.click(child1);
  fireEvent.click(child2);
  fireEvent.click(child3);
  fireEvent.click(child4);
  fireEvent.click(child5);
  expect(parentCheckbox).toBeChecked();

})


test('Uncheck any child(1) unchecks parent',()=>{
  render(<App/>);

  const parentCheckbox = screen.getByLabelText(/Select All/i);
  const child1 = screen.getByLabelText(/Select One/i);


  fireEvent.click(parentCheckbox);
  expect(parentCheckbox).toBeChecked();

  fireEvent.click(child1);
  expect(child1).not.toBeChecked();
  expect(parentCheckbox).not.toBeChecked();

})

test('Uncheck any child(5) unchecks parent',()=>{
  render(<App/>);

  const parentCheckbox = screen.getByLabelText(/Select All/i);
  const child5 = screen.getByLabelText(/Select Five/i);

  fireEvent.click(parentCheckbox);
  expect(parentCheckbox).toBeChecked();

  fireEvent.click(child5);
  expect(child5).not.toBeChecked();
  expect(parentCheckbox).not.toBeChecked();

})
