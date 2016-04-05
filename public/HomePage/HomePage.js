import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class HomePage extends Component {
 
  render() {
    return (
      <div>
        <div className="data-buttons-section">
          <div className="button-wrapper">
            <Link to={'stack'}><img className="data-structure-buttons" src={require('./img/stack.png')} /></Link>
            <Link to={'stack'}><p className="text">STACK</p></Link>
          </div>
          <div className="button-wrapper">
            <Link to={'queue'}><img className="data-structure-buttons" src={require('./img/queue.png')} /></Link>
            <Link to={'queue'}><p className="text">QUEUE</p></Link>
          </div>
          <div className="button-wrapper">
            <Link to={'tree'}><img className="data-structure-buttons" src={require('./img/tree.png')} /></Link>
            <Link to={'tree'}><p className="text">TREE</p></Link>
          </div>
          <div className="button-wrapper">
            <Link to={'linkedlist'}><img className="data-structure-buttons" src={require('./img/linkedList.png')} /></Link>
            <Link to={'linkedlist'}><p className="text">LINKED LIST</p></Link>
          </div>
          <div className="button-wrapper">
            <Link to={'graph'}><img className="data-structure-buttons" src={require('./img/graph.png')} /></Link>
            <Link to={'graph'}><p className="text">GRAPH</p></Link>
          </div>
          <div className="button-wrapper">
            <Link to={'hashtable'}><img className="data-structure-buttons" src={require('./img/hashTable.png')} /></Link>
            <Link to={'hashtable'}><p className="text">HASH TABLE</p></Link>
          </div>
        </div>
      </div>
    );
  }
}


