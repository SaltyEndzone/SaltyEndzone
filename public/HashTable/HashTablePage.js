import React, { Component } from 'react';
import HashTable from '../HashTable/HashTable';
import HashTableDiscussion from './HashTableDiscussion';
import HashTableCode from './HashTableCode';

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
            <HashTableDiscussion />
          </div>
        </div>
      </div>
    );
  }
}
