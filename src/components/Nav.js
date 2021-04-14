import React from "react";
import {NavLink} from "react-router-dom";

function Nav(props) {

  function clearSessionStorage() {
    sessionStorage.clear();
  }

  return (<nav>
  <ul>
      <li>Avatar and Username{props.name}</li>
      <li><NavLink onClick={clearSessionStorage} exact to='/'>Logout</NavLink></li>
  </ul>
</nav>)
}

export default Nav;