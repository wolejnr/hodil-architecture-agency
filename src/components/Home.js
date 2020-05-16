import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      name: "Hodil"
    };
  }

  render(){
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-1 social-links">
                  <div className="round-btn">
                    <div className="icon">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="round-btn">
                    <div className="icon">
                      <i className="fa fa-vimeo" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="round-btn">
                    <div className="icon">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="round-btn">
                    <div className="icon">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </div>
                  </div>
              </div>
              <div className="col-md-5 info-section">
                  <div className="round-bar black-btn">Established since 2012</div>
                  <h1>We do big things<br/> with big ideas.</h1>
                  <p>
                      You can choose one of our demos. Easy to import and <br/>
                      highly customizable. You will find what you need in one <br/>
                      of our fully equipped demos.
                  </p>
                  <div className="buttons">
                      <Link className="round-bar yellow-btn" to="/about">About Us</Link>
                      <Link className="round-bar blue-btn" to="/services">Services</Link>
                  </div>
              </div>
              <div className="col-md-6">
                <div className="featured-project">
                  <img src="https://cdn.vox-cdn.com/thumbor/F3EXGcvCo9QPs5oS9OvbxLV9-7c=/0x0:4761x2970/1200x800/filters:focal(1639x1407:2399x2167)/cdn.vox-cdn.com/uploads/chorus_image/image/65375048/3.0.jpg" className="img-fluid image-bg" alt="New sky scraper completed in January 2020" />
                  <div className="latest-project bg-dark">
                    <div className="highlight">Latest Project</div>
                    <div className="title text-light">Oxford Science Lab building</div>
                    <p>Ottawa, ON</p>
                  </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
}