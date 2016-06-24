 import React, { Component } from 'react';

import Queue from '../Queue/Queue';
import QueueDiscussion from './QueueDiscussion';
import QueueCode from './QueueCode';

export default class QueuePage extends Component {
  render() {
    return ( 
      <div>
        <div className="row">
          <div className="col-md-6">
            <Queue />
          </div>
          <div className="col-md-6">
            <QueueCode />
            <QueueDiscussion />
          </div>
        </div>
      </div>
    );
  }
}
