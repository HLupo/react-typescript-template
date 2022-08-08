import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "../views/App/App";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  // Should show learn react when loading is false
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  expect(screen.getByText(/false/i)).toBeInTheDocument();

  // Click the button and set loading to true
  const button = screen.getByText(/start loading/i);
  expect(button).toBeInTheDocument();
  act(() => {
    button.click();
  });

  // Should not show learn react when loading is true
  expect(screen.getByText(/true/i)).toBeInTheDocument();
  expect(screen.getByText(/stop loading/i)).toBeInTheDocument();
  expect(screen.queryByText(/learn react/i)).not.toBeVisible();
});
