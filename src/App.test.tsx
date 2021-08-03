import React from 'react';
import {fireEvent, screen, within } from '@testing-library/react';
import App from './App';
import {render} from "./utils/test-utils";

test('Renders ToDo App and find the header', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent('ToDo app')
});

test('Renders the App with custom store', () => {
  const initialState = {
    toDo: {
      items: [
        {
          id: 1,
          title: 'Item1',
          done: false
        },
        {
          id: 2,
          title: 'Item2',
          done: false
        },
      ],
      maxId: 3
    }
  }

  render(<App />, initialState);
  expect(screen.getByText('Item1')).toBeInTheDocument()
  expect(screen.getByText('Item2')).toBeInTheDocument()
});

test('Add item by pressing button', () => {
  const initialState = {
    toDo: {
      items: [],
      maxId: 0
    }
  }

  render(<App />, initialState);

  const button = screen.getByRole('button')
  const input = screen.getByRole('textbox')

  expect(button).toBeInTheDocument()
  expect(button).toBeDisabled()
  expect(input).toBeInTheDocument()

  fireEvent.change(input, {target: {value: 'Item text'}})
  expect(button).not.toBeDisabled()
  fireEvent.click(button)

  expect(screen.getByText('Item text')).toBeInTheDocument()
});

test('Delete item', () => {
  const initialState = {
    toDo: {
      items: [
        {
          id: 1,
          title: 'Item1',
          done: false
        },
        {
          id: 2,
          title: 'Item2',
          done: false
        },
      ],
      maxId: 3
    }
  }

  render(<App />, initialState);

  const item = screen.getByText('Item1').closest('.container') as HTMLElement
  const deleteButton = within(item).getByTitle('Delete item')
  expect(deleteButton).toBeInTheDocument()

  fireEvent.click(deleteButton)
  expect(item).not.toBeInTheDocument()
  expect(screen.getByText('Item2')).toBeInTheDocument()
});

test('Check item', () => {
  const initialState = {
    toDo: {
      items: [
        {
          id: 1,
          title: 'Item1',
          done: false
        },
      ],
      maxId: 2
    }
  }

  render(<App />, initialState);

  const item = screen.getByText('Item1')
  const container = item.closest('.container') as HTMLElement
  const checkButton = within(container).getByTitle('Check item')
  expect(checkButton).toBeInTheDocument()

  fireEvent.click(checkButton)

  expect(item).toHaveClass('titleDone')
  expect(container).toHaveClass('containerDone')
});

