import React, { Component } from 'react'
import Discussion from '../Discussion/Discussion.js'

export default class LinkedList extends Component {
  render() {
    return (

        <div className="col-md-6">
          <button className="dataStructureTitle">LINKED LIST</button>
            <img className="linkedlist-image" src="http://visualgo.net/img/list.gif" />
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