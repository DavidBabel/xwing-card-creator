import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

// const config = () => {
//   const config = {
//     id:
//   }
//   return config;
// }

const Test = props => {
  return (
    <div>
      <button
        onClick={e => {
          return <Redirect to="/salut$dd" />;
        }}
      />
      {props.match.params.id} {props.match.params.coucou}
    </div>
  );
};

const App = () => (
  <Router>
    <div style={{ margin: 10 }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about$lol">About</Link>
        </li>
        <li>
          <Link to="/topics$voila">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route path="/:id$:coucou" component={Test} />
    </div>
  </Router>
);

export default App;
