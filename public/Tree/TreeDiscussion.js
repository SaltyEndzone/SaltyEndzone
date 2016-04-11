import React, { Component } from 'react';

export default class Discussion extends Component {
  render() {
    return (
      <div>
        <div>
          <button className="discussion-title">DISCUSSION</button>
            <p className="discussion">Kathybeatz: Trees and thangs</p>
        </div>
        <div className="col-md-6 discussion">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Comment here ...">
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">POST</button>
              </span>
            </input>
          </div>
        </div>
      </div>
    );
  }
}
