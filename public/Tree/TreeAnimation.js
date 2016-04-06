import React, { Component } from 'react';

export default class TreeAnimation extends Component {
  constructor(props) {
    super(props);
      this.state = {
          x: 0,
          y: 0
        }
      }

      render() {
        let radius = Math.min(this.props.width, this.props.height) / 2;
        let strokeWidth = radius / 20;
        let cx = this.props.width / 2;
        let cy = this.props.height / 2;

        return <svg ref="svg" {...this.props} onMouseMove={this.handleMouseMove.bind(this)}>
          
          {this.renderEye(cx - radius/3, cy - radius/5, radius/4, strokeWidth)}
          {this.renderEye(cx + radius/3, cy - radius/5, radius/4, strokeWidth)}
          
        </svg>;
      }

      renderEye (cx, cy, radius, strokeWidth) {
        let angle = Math.atan2(this.state.y - cy, this.state.x - cx); // angle
        let bcx = cx + radius / 2 * Math.cos(angle);
        let bcy = cy + radius / 2 * Math.sin(angle);
        return [
          
          <circle key="eyeball" cx={bcx} cy={bcy} r={radius/2} fill="black"/>
        ];
      }

      handleMouseMove (event) {
        let svg = React.findDOMNode(this.refs.svg);
        let rect = svg.getBoundingClientRect();
        this.setState({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        });
      }
    }

    