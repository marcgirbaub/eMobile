import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeContextProvider from "./redux/contexts/ThemeContextProvider";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 24 * 60 * 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <CssBaseline />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};

export default App;
