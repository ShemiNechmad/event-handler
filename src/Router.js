import { Switch, Route } from 'react-router-dom';
import React from 'react';
import App from './App';
import Signup from './signup/Signup';


function Router() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/signup' component={Signup}/>
      </Switch>
    </main>
  );
}

export default Router;