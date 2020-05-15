import React, {Component} from 'react';
import './stylesheets/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

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
        <Home />
        <Footer />
      </div>
    );
  }
}

// export default App;
