import React from 'react';
import { Route, IndexRoute } from 'react-router';

import  App from './public/App/App';
import HomePage from './public/HomePage/HomePage';
import StackPage from './public/Stack/StackPage';
import LinkedListPage from './public/LinkedList/LinkedListPage';
import TreePage from './public/Tree/TreePage';
import QueuePage from './public/Queue/QueuePage';
import GraphPage from './public/Graph/GraphPage';
import HashTablePage from './public/HashTable/HashTablePage';

export default (
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path='stack' component={StackPage} ></Route>
      <Route path='linkedlist' component={LinkedListPage} ></Route>
      <Route path='tree' component={TreePage} ></Route>
      <Route path='queue' component={QueuePage} ></Route>
      <Route path='graph' component={GraphPage} ></Route>
      <Route path='hashtable' component={HashTablePage} ></Route>
      <Route path='home' component={HomePage} ></Route>
    </Route>
);