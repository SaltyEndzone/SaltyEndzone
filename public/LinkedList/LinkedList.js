import React, { Component } from 'react'
import Discussion from '../Discussion/Discussion.js'

export default class LinkedList extends Component {
  render() {
    return (

        <div className="col-md-6">
    	    <h1 className="dataStructureTitle">Linked List</h1>
            <img className="linkedlist-image" src="http://www.mikedoescoding.com/images/Linked%20List%20Data%20Structure.png" />
          <div>

          <div>
          <ul className="nav nav-pills nav-stacked">
            <li className="linkedlistactions"><a href="#">Add to Tail</a></li>
            <li className="linkedlistactions"><a href="#">Contains</a></li>
          </ul>

        </div>
        </div>
        </div>
    )
  }
}