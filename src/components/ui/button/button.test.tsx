import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  test("рендерит с детьми", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("применяет класс для размера sm", () => {
    render(<Button size="sm">Small Button</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("h-8");
  });

  test("применяет класс для варианта default", () => {
    render(<Button variant="default">Default Variant</Button>);
    const btn = screen.getByRole("button");
    expect(btn.classList.contains("bg-primary")).toBe(true);
  });

  test("добавляет дополнительные классы из className", () => {
    render(<Button className="my-custom-class">With Class</Button>);
    const btn = screen.getByRole("button");
    expect(btn.classList.contains("my-custom-class")).toBe(true);
  });

  test("при клике вызывает onClick", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Clickable</Button>);
    const btn = screen.getByRole("button");

    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("по умолчанию тип кнопки — button", () => {
    render(<Button>Default Type</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("type", "button");
  });

  test("можно передать кастомный тип", () => {
    render(<Button type="submit">Submit</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("type", "submit");
  });
});
