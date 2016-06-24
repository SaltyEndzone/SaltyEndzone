import React, { Component } from 'react';

export default class Discussion extends Component {

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.comment.value, this.password.value);
    this.comment.value = ''
  }

  render() {
    return (
      <div>
        <div>
          <button className="discussion-title">DISCUSSION</button>
            <p className="discussion">{this.props.comment}</p>
        </div>
        <div className="col-md-6 discussion">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Comment here ...">
              <span className="input-group-btn">
                <button className="btn btn-default" type="button" ref={node => { this.password = node }}>POST</button>
              </span>
            </input>
          </div>
        </div>
      </div>
    );
  }
}
