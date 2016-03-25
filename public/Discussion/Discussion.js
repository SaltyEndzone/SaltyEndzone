import React, { Component } from 'react'

export default class Discussion extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 className="discussion">Discussion</h2>
            <p className="discussion">Kathybeatz: How do you traverse through a tree?</p>
            <p className="discussion">MickyDWow: You can traverse through a tree by recursing over each node's children</p>
        </div>

        <div className="col-md-6 discussion">
          <input type="text" className="form-control" placeholder="Search for...">
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Go!</button>
            </span>
          </input>
        </div>
      </div>
    )
  }
}
