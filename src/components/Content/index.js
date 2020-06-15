import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home'
import Portfolio from '../Portfolio'


export default function Content () {
  return (
    <>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/portfolio' component={Portfolio}/>
      </Switch>
    </>
  )
}

