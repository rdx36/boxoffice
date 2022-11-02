
import React from  'react';
import { Switch,Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './components/pages/Home';
import Started from './components/pages/Started';

function App() {
  return ( 
    <div>

        <Navs/>


  <Switch>
<Route  exact path="/">
         <Home /></Route>
  <Route exact path="/started"> 
              <Started />
  </Route>
<Route> 
          <div>Not Found</div>
                      </Route>
  </Switch>
  </div>
  );
  
}

export default App;
