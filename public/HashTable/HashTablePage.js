import React, { Component } from 'react';

import HashTable from '../HashTable/HashTable';
import Discussion from '../Discussion/Discussion';
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
            <Discussion />
          </div>
        </div>
      </div>
    );
  }
}
