import React, { Component } from 'react';

export default class HashTableResize extends Component {
  render() {
    return (
      <div>
        <div>{'HashTable.prototype.resize = function(newLimit){'}</div>
        <div className="indent">{'var oldStorage = this._storage;'}</div>
        <div className="indent">{'this._limit = newLimit;'}</div>
        <div className="indent">{'this._storage = LimitedArray(this._limit);'}</div>
        <div className="indent">{'this._size = 0;'}</div>
        <div className="indent">{'var that = this;'}</div>
        <div className="indent">{'oldStorage.each(function(bucket){'}</div>
        <div className="double-indent">{'if( !bucket ){ return; }'}</div>
        <div className="double-indent">{'for( var i = 0; i < bucket.length; i++ ){'}</div>
        <div className="triple-indent">{'var pair = bucket[i];'}</div>
        <div className="triple-indent">{'that.insert(pair[0], pair[1]);'}</div>
        <div className="double-indent">{'}'}</div>
        <div className="indent">{'});'}</div>
        <div>{'};'}</div>
      </div>
    );
  }
}