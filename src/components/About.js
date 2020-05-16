import React, {Component} from 'react';

export default class About extends Component {

  render(){
    return (
      <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://i.pinimg.com/originals/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg" className="img-fluid" alt="Interior of Jack Blake's Apartment restyled in 2019" />
            </div>
            <div className="col-md-6 about-section">
              <h1 className="font-weight-bold">Your Best Architecture Company Inc.</h1>
              <div className="history-writeup">
                <p>
                  Our long history of family ownership has provided financial reassurance, business continuity and stability. It has also created firm foundations from which to promote British design as we expand into new territories. And now, as an established international company we continue to expand our frontiers to capture new markets.
                </p>
                <p>
                  Master cleanse copper mug keytar, ramps lyft viral jianbing forage. DIY plaid salvia skateboard whatever. Waistcoat migas etsy, microdosing cliche hella. Hot chicken cloud bread squid, leggings poke slow-carb portland hoodie...
                </p>
              </div>
              
              <div className="round-bar yellow-btn">More Details</div>
            </div>
              
          </div>
      </div>
    );
  }
}