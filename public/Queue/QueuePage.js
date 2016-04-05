 import React, { Component } from 'react';

import Queue from '../Queue/Queue';
import Discussion from '../Discussion/Discussion';
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
            <Discussion />
          </div>
        </div>
      </div>
    );
  }
}
