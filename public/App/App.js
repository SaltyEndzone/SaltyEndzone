import React, { Component } from 'react'
import Discussion from '../Discussion/Discussion.js'

export default class Tree extends Component {
  render() {
    return (

        <div className="col-md-6">
          <button className="dataStructureTitle">TREE</button>
            <img className="tree-image" src="http://blog.hackerearth.com/wp-content/uploads/2015/05/dfsbfs_animation_final.gif" />
          <div>

          <div className="action-section">
            <button className="action-title">DEPTH FIRST SEARCH</button>
            <button className="action-title">BREADTH FIRST SEARCH</button>
            <button className="action-title">ADD CHILD</button>
            <button className="action-title">CONTAINS</button>
          </div>
        </div>
        </div>
    )
  }
}

