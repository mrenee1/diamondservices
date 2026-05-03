import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import DiamondCutzPage from "./pages/DiamondCutzPage";
import DiamondGirlPage from "./pages/DiamondGirlPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/diamond-cutz" component={DiamondCutzPage} />
      <Route path="/diamond-girl" component={DiamondGirlPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
