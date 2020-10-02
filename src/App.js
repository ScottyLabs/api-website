import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Status } from './pages/Status';
import { Docs } from './pages/Docs';

function App() {
  return (
    <Switch>
      <Route path="/docs" component={Docs} />
      <Route path="/status" component={Status} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
