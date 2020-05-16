import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

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
          <Link className="p-2 link" to="/">Home</Link>
          <Link className="p-2 link" to="/about">About</Link>
          <Link className="p-2 link" to="/portfolio">Portfolio</Link>
          <Link className="p-2 link" to="/services">Services</Link>
          <Link className="p-2 link" to="/blog">Blog</Link>
        </nav>
        <a className="btn btn-outline-orange" href="/contact">Get a Quote</a>
      </div>
    );
  }
}