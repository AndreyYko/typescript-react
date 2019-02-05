import React, { Component } from 'react';

import Counter from './Counter/CounterContainer';

import './App.css';

class App extends Component<{}, {}> {
  render() {
    return (
      <Counter />
    );
  }
}

export default App;
