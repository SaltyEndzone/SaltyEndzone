import React from 'react';
import { Route, IndexRoute } from 'react-router';

import  App from './public/App/App';
import HomePage from './public/HomePage/HomePage';
import StackPage from './public/Stack/StackPage';
import LinkedListPage from './public/LinkedList/LinkedListPage';
import TreePage from './public/Tree/TreePage';

export default (
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path='stack' component={StackPage} ></Route>
      <Route path='linkedlist' component={LinkedListPage} ></Route>
      <Route path='tree' component={TreePage} ></Route>
      <Route path='home' component={HomePage} ></Route>
    </Route>
);