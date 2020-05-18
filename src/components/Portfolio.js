import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

export default class Portfolio extends Component {

  loopPortfolio(){
    const projects = this.props.data;
    return projects.map((project, i) => {
      return (
        <Link to={`/portfolio/details/${project.slug}`} className="col mb-4 portfolio-links" key={i}>
          <div className="card">
            <img src={`${project.featuredImage}`} className="card-img-top" alt={`${project.title}`} width="600" height="400" />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.city}, {project.province}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render(){
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
          {this.loopPortfolio()}
        </div>
      </div>
    );
  }
}