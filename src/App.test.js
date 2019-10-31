import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

const { container } = render(<App />);
test("age counter increments the count", () => {
  const add = container.querySelector("#counter-add");
  const minus = container.querySelector("#counter-minus");
  const label = container.querySelector("#age-label");
  expect(label.textContent).toBe("0");
  fireEvent.click(add);
  expect(label.textContent).toBe("1");
  fireEvent.click(minus);
  expect(label.textContent).toBe("0");
  fireEvent.click(add);
  fireEvent.click(add);
  fireEvent.click(add);
  fireEvent.click(add);
  expect(label.textContent).toBe("4");
});
