import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

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
