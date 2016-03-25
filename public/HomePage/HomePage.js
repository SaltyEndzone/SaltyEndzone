import React, { Component } from 'react'
import { render } from 'react-dom'


var header = {
  
}

var homeTable = {
  margin: 'auto',
}

var homeImage = {
  display: 'inlineBlock',
  height: '200px',
  width: '200px',
  margin: 'auto'
}
export default class HomePage extends Component {
 
  render() {

    return (
      <div>

        <div style={header}>

         <span><a href="/">Sign In</a> <a href="/">Sign Up</a></span>
          <h2>Choose a Data Structure:</h2>

        </div>

          <table style={homeTable}>

          <tbody>

          <tr>
          <td><img style ={homeImage} src = 'https://unnikked.ga/data/stack-push.png' /></td>
          <td><img style ={homeImage} src = 'https://netmatze.files.wordpress.com/2014/08/queue.png' /></td>
          </tr>

          <tr>
          <td><img style ={homeImage} src= 'http://i.stack.imgur.com/5kJXf.gif' /></td>
          <td><img style ={homeImage} src = 'http://www.mikedoescoding.com/images/Linked%20List%20Data%20Structure.png' /></td>
          </tr>

          <tr>
          <td><img style ={homeImage} src = 'http://files.differencebetween.com/wp-content/uploads/2014/09/Graph-in-Data-Structure_Difference-Between-Tree-and-Graph-in-Data-Structure.png' /></td>
          <td><img style ={homeImage} src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/HASHTB08.svg/362px-HASHTB08.svg.png' /></td>
          </tr>
          </tbody>

          </table>

      </div>
    )

  }
}


