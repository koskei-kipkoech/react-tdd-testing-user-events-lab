import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App />);
  expect(screen.getByLabelText(/technology/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/sports/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/music/i)).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  render(<App />);
  expect(screen.getByLabelText(/technology/i)).not.toBeChecked();
  expect(screen.getByLabelText(/sports/i)).not.toBeChecked();
  expect(screen.getByLabelText(/music/i)).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render(<App />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });

  expect(nameInput).toHaveValue("John Doe");
  expect(emailInput).toHaveValue("john@example.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render(<App />);
  const techCheckbox = screen.getByLabelText(/technology/i);
  const sportsCheckbox = screen.getByLabelText(/sports/i);
  const musicCheckbox = screen.getByLabelText(/music/i);

  fireEvent.click(techCheckbox);
  fireEvent.click(sportsCheckbox);

  expect(techCheckbox).toBeChecked();
  expect(sportsCheckbox).toBeChecked();
  expect(musicCheckbox).not.toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App />);
  const techCheckbox = screen.getByLabelText(/technology/i);
  const sportsCheckbox = screen.getByLabelText(/sports/i);
  const musicCheckbox = screen.getByLabelText(/music/i);

  fireEvent.click(techCheckbox);
  fireEvent.click(sportsCheckbox);

  expect(techCheckbox).toBeChecked();
  expect(sportsCheckbox).toBeChecked();
  expect(musicCheckbox).not.toBeChecked();
});
