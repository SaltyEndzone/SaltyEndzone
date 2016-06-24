import React, { Component } from 'react';
import HashTableFunctions   from './HashTableFunctions';
import HashTableDiscussion from './HashTableDiscussion';


export default class HashTable extends Component {
  render() {
    return (

        <div className="col-md-6">
          <button className="dataStructureTitle">HASH TABLE</button>
            <img className="hashtable-image" src="http://visualgo.net/img/gif/hashtable.gif" />
          <div>
          <HashTableFunctions />
        </div>
        </div>

    );
  }
}