import React, { Component } from 'react';

import Stack                from '../Stack/Stack';
import Discussion           from '../Discussion/Discussion';
import StackCode          from './StackCode';



export default class StackPage extends Component {
  render() {

    return ( 
      <div>
        <div className="row">
          <div className="col-md-6">
            <Stack />
          </div>
          <div className="col-md-6">
            <StackCode />
            <StackDiscussion />
          </div>
        </div>
      </div>
    </div>
  }
}
