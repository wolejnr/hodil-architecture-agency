import React from 'react';
import {useParams} from 'react-router-dom';

export default function PortfolioDetails(props) {
  let {slug} = useParams();
  const data = props.data;

  let portfolio = data.filter((item) => {
    return item.slug === slug;
  });

  let photoGrid = portfolio[0].photoGrid.map((item, i) => {
    return (
      <a href={`${item}`} className="col-sm-12 col-md-2 mb-4" key={i}>
        <img src={`${item}`} alt={`${portfolio[0].title}`} className="img-thumbnail" height="200" width="200"/>
      </a>
    );
  }); 
  
  const imgStyle = {
    background: `url('${portfolio[0].featuredImage}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "250px"
  };
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-12" style={imgStyle}></div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h2>{portfolio[0].title}</h2>
            <p>{portfolio[0].city}, {portfolio[0].province}</p>
            <p>
              {portfolio[0].description}
            </p>
          </div>
        </div>
        <div className="row">
          {photoGrid}
        </div>
      </div>
    );
  
}