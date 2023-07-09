import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import ThemeContextProvider from "./redux/contexts/ThemeContextProvider";

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
        <Outlet />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};

export default App;
