import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Login, Dashboard} from './pages';
import useToken from './components/useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={ setToken } />
  } 

  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Login setToken={ setToken } />
        </Route>
        <Route render={() => <h3>Oops 404</h3>}/>
      </Switch>
    </Router>
  );
}

export default App;
