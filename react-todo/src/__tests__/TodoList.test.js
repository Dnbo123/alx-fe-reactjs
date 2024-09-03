import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../ToDoList.jsx';

//checks if the component renders correctly by looking for the "Todo List" heading.
describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });


  //test verifies that the initial todo items are rendered correctly.
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  //simulates adding a new todo by typing into the input field and clicking the "Add Todo" button. 
  //It then checks if the new todo appears in the list.
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  //clicks on a todo item to toggle its completion status and checks if the style changes accordingly.
  test('toggles a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    fireEvent.click(todo);

    expect(todo).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todo);

    expect(todo).toHaveStyle('text-decoration: none');
  });

  // clicks the delete button of a todo item and verifies that the todo is removed from the list.
  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});