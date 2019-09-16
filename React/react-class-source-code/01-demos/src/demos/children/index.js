import React from 'react';

function ChildrenDemo(props) {
  console.log(props.children);
  //  map方法将数组拍平->[child1,1,1,2,2,2]
  console.log(React.Children.map(props.children, c => [c, [c, c]]));
  return props.children;
}

export default () => (
  <ChildrenDemo>
    <span>1</span>
    <span>2</span>
  </ChildrenDemo>
);
