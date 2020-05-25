import React, {Component} from 'react';

export default class Contact extends Component {

  render(){
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <h1>Contact us for any kind of help with your building project</h1>
          </div>
        </div>

        <div className="row mt-4 mb-5 contact-page">
          <div className="col-6">
          <iframe title="office location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.803841271097!2d-75.6489687841831!3d45.35277184889223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce08eeb88988f5%3A0x645b44b5b5a21e5b!2s2446%20Bank%20St%2C%20Ottawa%2C%20ON%20K1V%201A4!5e0!3m2!1sen!2sca!4v1590347007946!5m2!1sen!2sca" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div className="col-6">
            <form className="pt-4">
              <div className="form-group">
                <input type="text" className="form-control text-muted" placeholder="Full Name"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control text-muted" placeholder="(343)-961-6615"/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control text-muted" placeholder="Email Address (optional)"/>
              </div>
              <div className="form-group">
                <select id="inputState" className="form-control">
                  <option selected>Select Services</option>
                  <option>Architectural Design</option>
                  <option>Construction Works</option>
                  <option>House Renovation</option>
                  <option>Quality Assurance</option>
                  <option>Landscaping</option>
                  <option>Sustainability</option>
                </select>
              </div>
              <div className="form-group">
                <textarea className="form-control">Message</textarea>
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-orange btn-lg btn-block text-uppercase">Get a Quote</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}