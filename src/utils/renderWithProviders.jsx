import React from "react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import queryClientFactory from "./queryClientFactory";
import ThemeContextProvider from "../store/contexts/ThemeContextProvider";
import { store } from "../store/redux";

const renderWithProviders = (ui) => {
  const queryClient = queryClientFactory();

  const Wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </Provider>
    </QueryClientProvider>
  );

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
