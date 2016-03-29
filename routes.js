import React from 'react';
import { Route, IndexRoute } from 'react-router';

import  App from './public/App/App';
import HomePage from './public/HomePage/HomePage'
import LinkedListPage from './public/LinkedList/LinkedListPage'

export default (
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path='linkedlist' component={LinkedListPage} ></Route>
      <Route path='home' component={HomePage} ></Route>
    </Route>
);