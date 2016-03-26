import React, { Component } from 'react'
import Discussion from '../Discussion/Discussion.js'

export default class LinkedList extends Component {
  render() {
    return (
    	<div>Linked List!
    		<img src="http://www.cs.usfca.edu/~srollins/courses/cs112-f08/web/notes/linkedlists/ll2.gif"/>
    	</div>
    );
        <div className="col-md-6">
          <button className="dataStructureTitle">LINKED LIST</button>
            <img className="linkedlist-image" src="http://visualgo.net/img/list.gif" />
          <div>

          <div className="action-section">
            <button className="action-title">ADD TO TAIL</button>
            <button className="action-title">REMOVE HEAD</button>
            <button className="action-title">CONTAINS</button>
          </div>
        </div>
        </div>
    )
  }
}