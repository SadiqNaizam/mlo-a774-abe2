import { ThemeProvider } from "./components/ThemeProvider";
import IndexPage from "./pages/Index";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ascendion-ui-theme">
      <IndexPage />
    </ThemeProvider>
  );
}

export default App;