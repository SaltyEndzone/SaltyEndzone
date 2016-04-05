import React, { Component } from 'react';

export default class HashTableRetrieve extends Component {
  render() {
    return (
      <div>
        <div>{'HashTable.prototype.retrieve = function(k){'}</div>
        <div className="indent">{'var i = getIndexBelowMaxForKey(k, this._limit);'}</div>
        <div className="indent">{'var bucket = this._storage.get(i) || [];'}</div>
        <div className="indent">{'for ( var j = 0; j < bucket.length; j++ ) {'}</div>
        <div className="double-indent">{'var pair = bucket[j];'}</div>
        <div className="double-indent">{'if( pair[0] === k ){'}</div>
        <div className="triple-indent">{'return pair[1];'}</div>
        <div className="double-indent">{'}'}</div>
        <div className="indent">{'}'}</div>
        <div className="indent">{'return null;'}</div>
        <div>{'};'}</div>
      </div>
    );
  }
}