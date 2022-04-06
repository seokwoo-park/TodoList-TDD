import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

it("should have input and submit-button", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/write.../i);
  const submitButton = screen.getByRole("button", { name: "Submit" });

  expect(inputElement && submitButton).toBeInTheDocument();
});

it("should render `to do` after submit twice", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/write.../i);
  const submitButton = screen.getByRole("button", { name: "Submit" });

  fireEvent.change(inputElement, { target: { value: "hello world" } });
  fireEvent.click(submitButton);
  fireEvent.change(inputElement, { target: { value: "hello world2" } });
  fireEvent.click(submitButton);

  const todoElement = screen.getByText("hello world");
  expect(todoElement).toBeInTheDocument();
  const todoElement2 = screen.getByText("hello world2");
  expect(todoElement2).toBeInTheDocument();
});

it("should be render delete button with todo", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/write.../i);
  const submitButton = screen.getByRole("button", { name: "Submit" });

  fireEvent.change(inputElement, { target: { value: "hello world" } });
  fireEvent.click(submitButton);

  const deleteButton = screen.getByRole("button", { name: "Delete" });
  expect(deleteButton).toBeInTheDocument();
});

it("should delete the todo which clicked", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/write.../i);
  const submitButton = screen.getByRole("button", { name: "Submit" });

  fireEvent.change(inputElement, { target: { value: "hello world" } });
  fireEvent.click(submitButton);

  const todoElement = screen.getByText("hello world");
  const deleteButton = screen.getByRole("button", { name: "Delete" });
  fireEvent.click(deleteButton);
  expect(todoElement).not.toBeInTheDocument();
});
