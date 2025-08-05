import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import userEvent from "@testing-library/user-event";

describe("<App/>", () => {
  render(<App />);
  test("Keyboards in App", () => {
    const btn1 = screen.getByRole("button", { name: "1" });
    expect(btn1).toBeDefined();

    expect(screen.getByRole("button", { name: "1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "2" })).toBeDefined();
    expect(screen.getByRole("button", { name: "3" })).toBeDefined();
    expect(screen.getByRole("button", { name: "4" })).toBeDefined();
    expect(screen.getByRole("button", { name: "5" })).toBeDefined();
    expect(screen.getByRole("button", { name: "6" })).toBeDefined();
    expect(screen.getByRole("button", { name: "7" })).toBeDefined();
    expect(screen.getByRole("button", { name: "8" })).toBeDefined();
    expect(screen.getByRole("button", { name: "9" })).toBeDefined();
    expect(screen.getByRole("button", { name: "0" })).toBeDefined();
    expect(screen.getByRole("button", { name: "." })).toBeDefined();
    expect(screen.getByRole("button", { name: "+" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-" })).toBeDefined();
    expect(screen.getByRole("button", { name: "/" })).toBeDefined();
    expect(screen.getByRole("button", { name: "*" })).toBeDefined();
  });

  test("ScreenInput in App", () => {
    const screenEntry = screen.getByRole("textbox");
    expect(screenEntry).toBeDefined();
  });
});

test("E2E", async () => {
  const user = userEvent.setup();

  const btn2 = screen.getByRole("button", { name: "2" });
  expect(btn2).toBeDefined();

  const operatorPlus = screen.getByRole("button", { name: "+" });
  expect(operatorPlus).toBeDefined();

  // const screenEntry = screen.getByTestId("screen-entry");
  const screenEntry = screen.getByRole("textbox") as HTMLInputElement;
  expect(screenEntry).toBeDefined();

  const screenResults = screen.getByTestId("screen-results");
  expect(screenResults).toBeDefined();
  expect(screenResults.innerText).toBe("0");

  await user.click(btn2);
  expect(screenResults.innerText).toBe("2");
  await user.click(operatorPlus);
  expect(screenResults.innerText).toBe("0");
  await user.click(btn2);

  expect(screenEntry.value).toBe("2+2");
  expect(screenResults.innerText).toBe("4");
});
