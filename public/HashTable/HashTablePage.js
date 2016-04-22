import React, { Component } from 'react';
import HashTable from '../HashTable/HashTable';
import HashTableDiscussion from './HashTableDiscussion';
import HashTableCode from './HashTableCode';
import HashTableResources from './HashTableResources';

export default class HashTablePage extends Component {
  render() {
    return ( 
      <div>
        <div className="row">
          <div className="col-md-6">
            <HashTable />
          </div>
          <div className="col-md-6">
            <HashTableCode />
            <div className="hashtable-resources">
            <HashTableResources />
            </div>
          </div>
        </div>
        <div className="hashtable-discussion">
        <HashTableDiscussion />
        </div>
      </div>
    );
  }
}
