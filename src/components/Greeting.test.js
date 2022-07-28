import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders hellow world as a text", () => {
    // arrange
    render(<Greeting />);

    // Act
    // ... Nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test(`renders It's good to see you if the button is NOT clicked`, () => {
    // arrange
    render(<Greeting />);
    // Assert
    const paragraphElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test(`renders "Changed!"if the button is clicked`, () => {
    // arrange
    render(<Greeting />);

    //   Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const paragraphElement = screen.getByText("changed", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });
  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
