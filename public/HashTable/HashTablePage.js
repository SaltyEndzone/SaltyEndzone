 import React, { Component } from 'react'

import HashTable from '../HashTable/HashTable'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'

export default class HashTablePage extends Component {
  render() {
    return ( 
      <div>
        <div className="row">
          <div className="col-md-6">
            <HashTable />
          </div>
          <div className="col-md-6">
            <Code />
            <Discussion />
          </div>
        </div>
      </div>
    )
  }
}
