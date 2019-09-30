import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import emitter from './events';

import '../index.less'


// class Leaf1 extends Component {
//   // 声明需要使用的Context属性
//   static contextTypes = {
//     propA: PropTypes.string,
//     methodA: PropTypes.func  // 这边声明过才可以使用这个方法
//   }
//
//   constructor(props){
//     super(props)
//   }
//   render(){
//     const {
//       propA,
//       methodA
//     } = this.context
//     methodA()
//     return (<div>{propA}</div>)
//   }
// }
//
// class Hello extends Component {
//   constructor(props) {
//     console.log('constructor')
//     super(props)
//   }
//
//   componentWillMount(){
//     console.log('compnentWillMount')
//   }
//
//   componentDidMount(){
//     console.log('componentDidMount')
//   }
//
//   componentWillReceiveProps(){
//     console.log('componentWillReceiveProps')
//   }
//
//   shouldComponentUpdate(nextProps){
//     console.log('shouldComponentUpdate')
//     if(nextProps.name === this.props.name) {
//       return false
//     }
//     return true
//   }
//
//   componentWillUpdate(){
//     console.log('componentWillUpdate')
//   }
//
//   componentDidUpdate(){
//     console.log('componentDidUpdate')
//   }
//
//   componentWillUnmount(){
//     console.log('componentDidUnmount')
//   }
//
//   render() {
//     console.log('render')
//     return (<div className='title'>hello world {this.props.name}<Leaf1 /></div>)
//   }
// }

// class Container extends Component {
//   // 声明Context对象属性
//   static childContextTypes = {
//     propA: PropTypes.string,
//     methodA: PropTypes.func
//   }
//
//   // 返回Context对象，方法名是约定好的
//   getChildContext () {
//     console.log('getChildContext')
//     return {
//       propA: 'propA',
//       methodA: () => {
//         console.log(`hello: ${this.context.propA}`)
//       }
//     }
//   }
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'zhaoshanshan'
//     }
//   }
//
//   change = () => {
//     this.setState({
//         name: 'wanjunjie'
//     })
//   }
//   render() {
//     // const name = "zhaoshanshan"
//     return(
//       <div>
//       <Hello name={this.state.name} />
//       <button onClick={this.change}>change</button>
//       </div>
//     )
//   }
// }

class List1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'List1',
    };
  }
  componentDidMount() {
    // 组件装载完成以后声明一个自定义事件
    this.eventEmitter = emitter.addListener('changeMessage', (message) => {
      this.setState({
        message,
      });
    });
  }
  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter);
  }
  render() {
    return (
      <div>
      {this.state.message}
  </div>
  );
  }
}

class List2 extends Component {
  handleClick = (message) => {
    emitter.emit('changeMessage', message);
  };
  render() {
    return (
      <div>
      <button onClick={this.handleClick.bind(this, 'List2')}>点击我改变List1组件中显示信息</button>
    </div>
  );
  }
}

class Container extends Component {
  render() {
    return (
      <div>
      <List1 />
      <List2 />
      </div>
  );
  }
}

ReactDom.render(
  <Container/>,
  document.getElementById('root')
)