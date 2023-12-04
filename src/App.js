import React, { Component } from 'react'; import './App.css'; 
import HelloWorld from './helloworld';
import Counter from './counter';

class App extends Component { render() {
    return (
      <div className="App">
      <HelloWorld name={'Hetansh Patel'}  />
      <Counter/>
      </div>
    );
  }
}
export default App; 
