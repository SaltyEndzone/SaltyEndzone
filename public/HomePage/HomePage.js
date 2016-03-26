import React, { Component } from 'react'
import { render } from 'react-dom'


export default class HomePage extends Component {
 
  render() {
    return (
      <div>
    
      
        <div className="data-buttons-section">

         
          <img className="data-structure-buttons" src ={require('./img/stack.png')} />


          <img className="data-structure-buttons" src ={require('./img/queue.png')} />

          
          <img className="data-structure-buttons" src={require('./img/tree.png')} />

          
          <img className="data-structure-buttons" src={require('./img/linkedList.png')} />

          
          <img className="data-structure-buttons" src ={require('./img/graph.png')} />

          
          <img className="data-structure-buttons" src ={require('./img/hashTable.png')} />

          
        </div>

      </div>
    )
  }
}


