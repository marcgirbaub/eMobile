import React from "react";
import queryClientFactory from "./queryClientFactory";
import { QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import ThemeContextProvider from "../store/contexts/ThemeContextProvider";

const renderWithProviders = (ui) => {
  const queryClient = queryClientFactory();

  const Wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </QueryClientProvider>
  );

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
