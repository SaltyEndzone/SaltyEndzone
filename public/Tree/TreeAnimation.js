import React, { Component }   from 'react';
import TreeRootSVG            from './TreeSVG/TreeRootSVG'
import TreeLvl1ChildOneSVG    from './TreeSVG/TreeLvl1ChildOneSVG'
import TreeLvl1ChildTwoSVG    from './TreeSVG/TreeLvl1ChildTwoSVG'
import TreeLvl2LeftChild1SVG  from './TreeSVG/TreeLvl2LeftChild1SVG'
import TreeLvl2RightChild2SVG from './TreeSVG/TreeLvl2RightChild2SVG'
import TreeLvl2LeftChild3SVG  from './TreeSVG/TreeLvl2LeftChild3SVG'
import TreeLvl2RightChild4SVG from './TreeSVG/TreeLvl2RightChild4SVG'
import TreeLvl3LeftChild1SVG  from './TreeSVG/TreeLvl3LeftChild1SVG'
import TreeLvl3RightChild2SVG from './TreeSVG/TreeLvl3RightChild2SVG'
import TreeLvl3LeftChild3SVG  from './TreeSVG/TreeLvl3LeftChild3SVG'
import TreeLvl3RightChild4SVG from './TreeSVG/TreeLvl3RightChild4SVG'
import TreeLvl3LeftChild5SVG  from './TreeSVG/TreeLvl3LeftChild5SVG'
import TreeLvl3RightChild6SVG from './TreeSVG/TreeLvl3RightChild6SVG'
import TreeLvl3LeftChild7SVG  from './TreeSVG/TreeLvl3LeftChild7SVG'
import TreeLvl3RightChild8SVG from './TreeSVG/TreeLvl3RightChild8SVG'

export default class TreeAnimation extends Component {

  render() {
    return (
      <div className="tree-image">
        <svg className="tree-animation-background" height="380" width="550">
          <TreeLvl3RightChild8SVG />
          <TreeLvl3LeftChild7SVG /> 
          <TreeLvl3RightChild6SVG />
          <TreeLvl3LeftChild5SVG />
          <TreeLvl3RightChild4SVG />
          <TreeLvl3LeftChild3SVG />
          <TreeLvl3RightChild2SVG />
          <TreeLvl3LeftChild1SVG />
          <TreeLvl2RightChild4SVG />
          <TreeLvl2LeftChild3SVG />
          <TreeLvl2RightChild2SVG />
          <TreeLvl2LeftChild1SVG />
          <TreeLvl1ChildTwoSVG />
          <TreeLvl1ChildOneSVG />
          <TreeRootSVG />
        </svg>
      </div>
    );
  }
}

    