import React, { Component } from 'react';

export default class Discussion extends Component {
  render() {
    return <div>
             <div>
              <button className="discussion-title">DISCUSSION</button>
                <p className="discussion">Kathybeatz: How do you traverse through a tree?</p>
                <p className="discussion">MickyDWow: You can traverse through a tree by recursing over each nodes children</p>
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
  }
}
