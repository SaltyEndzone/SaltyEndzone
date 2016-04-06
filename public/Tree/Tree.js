import React, { Component } from 'react';

import TreeAnimation from './TreeAnimation';
import TreeFunctions from './TreeFunctions';

// <img className="tree-image" src="http://blog.hackerearth.com/wp-content/uploads/2015/05/dfsbfs_animation_final.gif" />

export default class Tree extends Component {
  render() {
    return (
        <div className="col-md-6">
          <button className="dataStructureTitle">TREE</button>
          <div>
            <TreeAnimation width="550" height="380" />
            <TreeFunctions />
          </div>
        </div>
    );
  }
}