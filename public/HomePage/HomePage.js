import React, { Component } from 'react'
import { render } from 'react-dom'


export default class HomePage extends Component {
 
  render() {
    return (
      <div>
        <div className="data-buttons-section">
          <img className="data-structure-buttons" src = 'https://unnikked.ga/data/stack-push.png' />
          <img className="data-structure-buttons" src = 'https://netmatze.files.wordpress.com/2014/08/queue.png' />
          <img className="data-structure-buttons" src= 'http://i.stack.imgur.com/5kJXf.gif' />
          <img className="data-structure-buttons" src='http://www.mikedoescoding.com/images/Linked%20List%20Data%20Structure.png' />
          <img className="data-structure-buttons" src = 'http://files.differencebetween.com/wp-content/uploads/2014/09/Graph-in-Data-Structure_Difference-Between-Tree-and-Graph-in-Data-Structure.png' />
          <img className="data-structure-buttons" src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/HASHTB08.svg/362px-HASHTB08.svg.png' />
        </div>
      </div>
    )
  }
}


