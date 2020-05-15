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
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom border-gray text-light shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-bold font-italic">WoodRoffe</h5>
        <nav className="my-2 my-md-0 mr-md-3 text-light">
          <a className="p-2 link" href="/">Home</a>
          <a className="p-2 link" href="/">About</a>
          <a className="p-2 link" href="/">Portfolio</a>
          <a className="p-2 link" href="/">Services</a>
          <a className="p-2 link" href="/">Blog</a>
        </nav>
        <a className="btn btn-outline-orange" href="/">Get a Quote</a>
      </div>
    );
  }
}