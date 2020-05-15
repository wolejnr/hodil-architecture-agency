import React, {Component} from 'react';

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
                      <div className="round-bar yellow-btn">About Us</div>
                      <div className="round-bar blue-btn">Services</div>
                  </div>
              </div>
              <div className="col-md-6 image-bg">
                  <div className="latest-project">
                      <div className="highlight">Latest Project</div>
                      <div className="title">Oxford Science Lab building</div>
                      <p>Ottawa, ON</p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}