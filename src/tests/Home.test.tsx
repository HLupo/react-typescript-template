import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";
import renderWithProviders from "./test-utils";

import Home from "../views/Home/Home";

describe("Home view testing suite", () => {
  it("Should render the Counter components with a value = 0", () => {
    renderWithProviders(<Home />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("Should render the Counter components with a value = 0 and increment it", () => {
    renderWithProviders(<Home />);

    expect(screen.getByText("0")).toBeInTheDocument();
    const buttonIncrement = screen.getByText("Increment");

    act(() => {
      buttonIncrement.click();
    });

    expect(screen.queryByText("0")).not.toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("Should render the Counter components with a value = 1 and decrement it", () => {
    const initialState = { counter: 1 };
    renderWithProviders(<Home />, {
      preloadedState: { counter: initialState },
    });

    expect(screen.getByText("1")).toBeInTheDocument();
    const buttonDecrement = screen.getByText("Decrement");
    act(() => {
      buttonDecrement.click();
    });

    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
