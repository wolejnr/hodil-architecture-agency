import React, {Component} from 'react';

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      name: "Hodil"
    };
  }

  render(){
    return (
        <div className="container">
            <div id="header">
                    <div className="logo">Hodil</div>
                    <nav className="nav-bar">
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </nav>
            </div>
      </div>
    );
  }
}