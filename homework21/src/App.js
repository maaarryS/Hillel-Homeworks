import React, {Component} from 'react';
import img from './assets/logo.png';

class App extends Component {
  render() {
    return <div>
      <h1>Hello!</h1>
      <img src={img} />
    </div>
  }
}

export default App;