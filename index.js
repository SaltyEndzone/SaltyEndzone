import React, { Component } from 'react'
import { render } from 'react-dom'
import HomePage from './public/home/HomePage'

class HelloWorld extends Component {
  render() {
    return (
      <div>
      < HomePage />
      </div>
    )
  }
}

render(<HelloWorld/>, document.getElementById('app'))