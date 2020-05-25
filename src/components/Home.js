import React, {useState} from 'react';
import {
  Link
} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-1 social-links">
                <Link href="/" className="round-btn">
                  <div className="icon">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                </Link>
                <Link to="/" className="round-btn">
                  <div className="icon">
                    <i className="fa fa-vimeo" aria-hidden="true"></i>
                  </div>
                </Link>
                <Link to="/" className="round-btn">
                  <div className="icon">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                </Link>
                <Link to="/" className="round-btn">
                  <div className="icon">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                </Link>
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
            <div className="col-12 col-md-6">
              <div className="featured-project">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://wilden.ca/wp-content/uploads/2018/06/homeplans-1-half-storey-card-600x400.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <div className="slide-text">
                        <h3>Somerset Residence</h3>
                        <p>White Rock, BC</p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_standard/public/images/15/09/front.jpg?itok=9ZqRQo6l"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <div className="slide-text">
                        <h3>Carleton Heights</h3>
                        <p>Ottawa, ON</p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.onekindesign.com/wp-content/uploads/2020/05/Farmhouse-Style-Home-Dana-Webber-Design-Group-01-1-Kindesign-600x400.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <div className="slide-text">
                        <h3>Alta Vista</h3>
                        <p>
                          Ottawa, ON
                        </p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                  <div className="latest-project bg-dark">
                    <div className="highlight">Latest Projects</div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  );
  
}