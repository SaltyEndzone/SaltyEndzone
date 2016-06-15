import React, { Component } from 'react';

export default class Discussion extends Component {
  render() {
    return (
      <div>
        <div>
          <button className="discussion-title">DISCUSSION</button>
            <div className="comments-box">
            <p className="discussion">Kathybeatz: How do you deal with collisions?</p>
            <p className="discussion">MickyDWow: the simplest is to call our hash function again and again repeatedly until we find an empty space.
            </p>
            <p className="discussion">Kathybeatz: Thanks @MickyDWow</p>
            <p className="discussion">JBeezy: What is a bucket?</p>
            <p className="discussion">HardB: Buckets are storage areas for values!</p>
            <p className="discussion">JBeezy: Thanks for the clarification @HardB!</p>
            <p className="discussion">HardB: No Problem.</p>
            </div>

        </div>
        <div className="col-md-6 discussion">
          <div className="hashtable-discussion-box">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Comment here ...">
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">POST</button>
                </span>
              </input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
