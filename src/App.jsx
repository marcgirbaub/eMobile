import { QueryClient, QueryClientProvider } from "react-query";
import ThemeContextProvider from "./store/contexts/ThemeContextProvider";
import Layout from "./components/Layout/Layout";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 60 * 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <Layout />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};

export default App;
