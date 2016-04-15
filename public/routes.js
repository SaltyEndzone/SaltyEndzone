import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import App                   from './App/App';
import HomePage              from './HomePage/HomePage';
import StackPage             from './Stack/StackPage';
import LinkedListPage        from './LinkedList/LinkedListPage';
import TreePage              from './Tree/TreePage';
import QueuePage             from './Queue/QueuePage';
import GraphPage             from './Graph/GraphPage';
import HashTablePage         from './HashTable/HashTablePage';
import SignUp                from './Login/SignUp/SignUp';

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
      <Route path='signup' component={SignUp} ></Route>
    </Route>
);