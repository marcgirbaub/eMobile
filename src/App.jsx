import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import ThemeContextProvider from "./store/contexts/ThemeContextProvider";
import Layout from "./components/Layout/Layout";
import { store } from "./store/redux";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 60 * 60 * 1000,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeContextProvider>
          <Layout />
        </ThemeContextProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
