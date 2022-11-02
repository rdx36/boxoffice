import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Started from './components/pages/Started';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/started">
        <Started />
      </Route>

      <Route>
        <div>Not found</div>
      </Route>
    </Switch>
  );
}

export default App;
