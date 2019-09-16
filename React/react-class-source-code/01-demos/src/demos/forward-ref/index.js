import React from 'react';

const TargetComponent = React.forwardRef((props, ref) => <input type='text' ref={ref} />);

// functionComponet上不能实例，例如redux中高阶组件，为了获取自己写的实例可以使用React.forwardRef
// React.forwardRef给包装组件使用的
// const TargetComponent = props => <input type='text' />;

export default class Comp extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.ref.current.value = 'ref get input';
  }

  render() {
    return <TargetComponent ref={this.ref} />;
  }
}
