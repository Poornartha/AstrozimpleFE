import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Numerology from "./components/pages/Numerology";
import Astrology from "./components/pages/Astrology";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/numerology" exact component={Numerology} />{" "}
          <Route path="/astrology" exact component={Astrology} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
