import React from 'react';
import {
    Link
} from 'react-router-dom';

export default function FeaturedArticles(props){
    let data = props.data;

    // Filter out the featured articles
    let featuredArticles = data.filter((item) => {
        return item.isFeatured !== false;
    });

    let loopFeaturedArticles = featuredArticles.map(
        (article, i) => {
            return(
                <div className="col-md-4" key={i}>
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: '225px', width: '100%', display: 'block'}} src={article.imageUrl} data-holder-rendered="true"/>
                        <div className="card-body">
                            <h6 className="text-danger text-uppercase">{article.category}</h6>
                            <h3 className="font-weight-bold">{article.title}</h3>
                            <p className="card-text mt-4 text-dark">
                                {article.summary}
                            </p>
                            <div>
                                <Link className="round-bar plain-btn" to={`/blog/${article.slug}`}>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ); 
        } 
    );

    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Our Special Articles</h1>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-end">
                        <Link className="round-bar yellow-btn" to="/archive">See More</Link>
                    </div>
                </div>
            </div>
            <div className="row pt-4">
                {loopFeaturedArticles}
            </div>
        </div>
    );
    
}