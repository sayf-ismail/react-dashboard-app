import React, { useState } from "react";
import PropTypes from 'prop-types';
import {Button, Card} from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./Login.css";

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const history = useHistory();
  const [id, setId] = useState();
  const [name, setName] = useState();

  const handleSubmit = async event => {
    event.preventDefault();
    const token = await loginUser({
      id,
      name
    });
    setToken(token);
    try {
      history.push("/dashboard");
    } catch (e) {
      alert(e.message);
    }
  }

  return (<div className="login-wrapper">
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input type="text" onChange={event => setId(event.target.value)} placeholder="Id"/>
        <br />
        <input type="text" onChange={event => setName(event.target.value)} placeholder="Name"/>
        <br />
        <Button type="submit" block>Login</Button>
      </form>
    </Card>
  </div>)
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}