import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  incrementCount() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  decrementCount() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  resetCount() {
    this.setState(prevState => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
