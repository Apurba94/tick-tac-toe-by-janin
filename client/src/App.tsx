// Paper Arcade design: the game is the sole route and keeps the frame quiet so the board feels like a physical play object.
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

function App() {
  return <ErrorBoundary><Switch><Route path="/" component={Home} /><Route component={Home} /></Switch></ErrorBoundary>;
}

export default App;
