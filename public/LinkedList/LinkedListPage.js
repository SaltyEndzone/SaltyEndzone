import React, { Component } from 'react';
import LinkedList from '../LinkedList/LinkedList';
import LinkedListDiscussion from './LinkedListDiscussion';
import LinkedListCode from './LinkedListCode';

export default class LinkedListPage extends Component {
  render() {
  
    return <div>
            <div className="row">
              <div className="col-md-6">
                <LinkedList />
            </div>
            <div className="col-md-6">
              <LinkedListCode />
              <LinkedListDiscussion />
            </div>
          </div>
        </div>
  }
}
