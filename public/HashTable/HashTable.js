import React, { Component } from 'react'
import Discussion from '../Discussion/Discussion'
import Code from '../Code/Code'


export default class HashTable extends Component {
  render() {
    return (

        <div className="col-md-6">
          <button className="dataStructureTitle">HASH TABLE</button>
            <img className="hashtable-image" src="http://visualgo.net/img/hashtable.gif" />
          <div>

          <div className="action-section">
            <button className="action-title">INSERT</button>
            <button className="action-title">RETRIEVE</button>
            <button className="action-title">REMOVE</button>
            <button className="action-title">RESIZE</button>
          </div>
        </div>
        </div>
    )
  }
}