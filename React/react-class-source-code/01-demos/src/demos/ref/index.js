import React from 'react';

export default class RefDemo extends React.Component {
  constructor() {
    super();
    this.objRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.refs.stringRef.textContent = 'string ref got';
      this.methodRef.textContent = 'method ref got';
      this.objRef.current.textContent = 'obj ref got';
    }, 1000);
  }

  render() {
    return (
      <>
        {/* 第一种 即将废弃 react16前使用最多的*/}
        <p ref='stringRef'>span1</p>
        {/* 第二种 传入一个方法*/}
        <p ref={ele => (this.methodRef = ele)}>span3</p>
        {/* 第三种方法调用创建React.createRef() */}
        <p ref={this.objRef}>span3</p>
      </>
    );
  }
}

// export default () => {
//   return <div>Ref</div>
// }
