import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Numerology from "./components/pages/Numerology";
import Astrology from "./components/pages/Astrology";
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    store.dispatch(loadUser);
  })

  return (
    <>
    <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/products' exact component={Products} />
        <Route path='/login' exact component={Login} />
        <Route path="/numerology" exact component={Numerology} />{" "}
        <Route path="/astrology" exact component={Astrology} />
      </Switch>
    </Router>
    </Provider>
    </>
  );
}

export default App;
