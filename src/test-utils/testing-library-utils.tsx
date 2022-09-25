import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";

import { GithubProvider } from "../context/github/GithubContext";
import { AlertProvider } from "../context/alert/AlertContext";

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <GithubProvider>
      <AlertProvider>{children}</AlertProvider>
    </GithubProvider>
  );
};

const renderWithContext = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };
