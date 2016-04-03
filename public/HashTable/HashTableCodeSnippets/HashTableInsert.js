import React, { Component } from 'react'

export default class HashTableInsert extends Component {
  render() {
    return (
      <div>
        <div>{'HashTable.prototype.insert = function(k, v){'}</div>
        <div className="indent">{'var i = getIndexBelowMaxForKey(k, this._limit);'}</div>
        <div className="indent">{'var bucket = this._storage.get(i) || [];'}</div>
        <div className="indent">{'for( var j = 0; j < bucket.length; j++ ){'}</div>
        <div className="double-indent">{'var pair = bucket[j];'}</div>
        <div className="triple-indent">{'if( pair[0] === k ){'}</div>
        <div className="quad-indent">{'pair[1] = v;'}</div>
        <div className="quad-indent">{'return;'}</div>
        <div className="triple-indent">{'}'}</div>
        <div className="indent">{'}'}</div>
        <div className="indent">{'bucket.push([k,v]);'}</div>
        <div className="indent">{'this._storage.set(i, bucket);'}</div>
        <div className="indent">{'this._size++;'}</div>
        <div className="indent">{'if( this._size > this._limit * 0.75 ){'}</div>
        <div className="double-indent">{'  this.resize(this._limit*2);'}</div>
        <div className="indent">{'}'}</div>
        <div>{'};'}</div>
      </div>
    )
  }
}