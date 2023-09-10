import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("Button has correct initial color, and updates when clicked", () => {
  render(<App />);
  // Change to blue라는 텍스트를 가지며 버튼 역할인 요소를 찾음
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // 단언
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click 이벤트
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkbox).not.toBeChecked();
});

test("after check", () => {
  render(<App />);
  const colorButton = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // checkbox 처음 클릭
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // checkbox 다시 클릭
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("color change after check", () => {
  render(<App />);
  const colorButton = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // checkbox 처음 클릭
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // checkbox 다시 클릭
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("check after click button", () => {
  render(<App />);
  const colorButton = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // 버튼 클릭 -> 색변경 (red->blue)
  fireEvent.click(colorButton);

  // checkbox 처음 클릭
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // checkbox 다시 클릭
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

describe("space before camel-case capital letters", () => {
  // ex) Red
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  // ex) MidnightBlue
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  // ex) MediumVioletRed
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
