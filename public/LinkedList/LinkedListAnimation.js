import React, { Component }   from 'react';
import LinkedList1SVG         from './LinkedListSVG/LinkedList1SVG';
import LinkedList2SVG         from './LinkedListSVG/LinkedList2SVG';
import LinkedList3SVG         from './LinkedListSVG/LinkedList3SVG';
import LinkedList4SVG         from './LinkedListSVG/LinkedList4SVG';

export default class LinkedListAnimation extends Component {
  render() {
    return <div className="linkedlist-image">
             <svg className="linkedlist-animation-background" height="380" width="550">

               <LinkedList3SVG />
               <LinkedList2SVG />
               <LinkedList1SVG />
             </svg>
           </div>
  }
}