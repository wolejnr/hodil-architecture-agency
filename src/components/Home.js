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
            <div id="home-page">
                <div className="social-links">
                    <div className="round-btn">Instagram</div>
                    <div className="round-btn">Vimeo</div>
                    <div className="round-btn">Twitter</div>
                    <div className="round-btn">facebook</div>
                </div>
                <div className="info-section">
                    <div className="round-bar black-btn">Established since 2012</div>
                    <h1>We do big things with big ideas.</h1>
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
                <div className="latest-project">
                    <div>
                        <h6>Latest Project</h6>
                        <h4>Oxford Science Lab building</h4>
                        <p>Ottawa, ON</p>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}