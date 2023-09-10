import { render, screen } from "@testing-library/react";
import App from "./App";

test("Button has correct initial color.", () => {
  render(<App />);
  // Change to blue라는 텍스트를 가지며 버튼 역할인 요소를 찾음
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  // 단언
  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
});
test("Button turns blue when clicked.", () => {});
