import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders text: App", () => {
  render(<App />);
  const elm = screen.getByText(/App/i);
  expect(elm).toBeInTheDocument();
});
