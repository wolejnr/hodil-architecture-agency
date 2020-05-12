import React, {Component} from 'react';
import './stylesheets/App.scss';
import Header from './components/Header';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "Hodil"
    };
  }

  render(){
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

// export default App;
