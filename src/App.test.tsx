import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { App } from "./App";
import { About } from "./pages/About";

describe("navigating at home page", () => {
  test("navigating header link", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    await user.click(screen.getByText(/about/i));
    expect(
      screen.getByText(
        /a react app to search github profiles and see profile details/i
      )
    ).toBeInTheDocument();

    await user.click(screen.getByText(/home/i));
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();

    await user.click(screen.getByText(/github finder/i));
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("landing on a 404 not found page", () => {
    const badRoute = "/some-bad-route";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/404 - page not found!/i)).toBeInTheDocument();
  });

  test("rendering a component that uses About", () => {
    const route = "/about";

    render(
      <MemoryRouter initialEntries={[route]}>
        <About />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        /a react app to search github profiles and see profile details/i
      )
    ).toBeInTheDocument();
  });
});
