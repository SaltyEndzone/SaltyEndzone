import React, { Component } from 'react';
import Tree from '../Tree/Tree';
import TreeCode from './TreeCode';
import TreeDiscussion from './TreeDiscussion';

export default class TreePage extends Component {
  render() {
    return ( 
      <div>
        <div className="row">
          <div className="col-md-6">
            <Tree />
          </div>
          <div className="col-md-6">
            <TreeCode />
            <TreeDiscussion />
          </div>
        </div>
      </div>
    );
  }
}
