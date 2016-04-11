import React, { Component } from 'react';

import Graph from '../Graph/Graph';
import GraphDiscussion from './GraphDiscussion';
import GraphCode from './GraphCode';

export default class GraphPage extends Component {
  render() {
    return ( 
      <div>
        <div className="row">
          <div className="col-md-6">
            <Graph />
          </div>
          <div className="col-md-6">
            <GraphCode />
            <GraphDiscussion />
          </div>
        </div>
      </div>
    );
  }
}
