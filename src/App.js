
import React from  'react';
import { Switch,Route } from 'react-router-dom';

function App() {
  return ( 
  <Switch>
<Route  exact path="/">
  This is Home Page
    </Route>

  <Route exact path="/started">This is started </Route>
<Route> This is 404 page</Route>
  </Switch>
  );
  
}

export default App;
