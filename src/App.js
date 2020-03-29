import React from 'react';

class App extends React.Component {
  // state : change datas
  state = {
    count : 0
  }
  add = () => {
    console.log("add");
    // nope! 이렇게 하면 React에서 render function을 refresh 하지 않기 떄문에 setState()를 통해 변경해야 한다.
    // * React는 setState()가 실행될때마다 chage된 state와 함께 render function을 호출한다!
    // this.state.count = 1;
    // this.state.count로 직접 state를 사용하는 것은 좋은 코딩은 아니다.
    // this.setState({count: this.state.count+1})
    this.setState(current => ({count: current.count+1}));
  };
  minus = () => {
    console.log("minus");
    // this.state.count = -1;
    // this.setState({count: this.state.count-1})
    this.setState(current => ({count: current.count-1}));
  };
  // componentDidMount : "이 component는 처음 render됐어."
  componentDidMount() {
    console.log("component rendered")
  }
  componentDidUpdate() {
    console.log("I just updated")
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world")
  }
  render() {
    console.log("I'm rendering")
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
