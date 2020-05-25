import React from 'react';
import {useParams} from 'react-router-dom';

export default function Blog(props) {
  let {slug} = useParams();
  const data = props.data;

  let article = data.filter((item) => {
    return item.slug === slug;
  });

  const imgStyle = {
    background: `url('${article[0].imageUrl}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "300px"
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 class="pb-3 mb-4 font-italic border-bottom">
            From the Firehose
          </h3>

          <div className="col-12 mb-4" style={imgStyle}></div>

          <div class="blog-post">
            <h2 class="blog-post-title">{article[0].title}</h2>
            <p class="blog-post-meta">{article[0].date} by <a href="/">{article[0].author}</a></p>

            <p>{article[0].summary}</p>
            <hr/>
            <p>{article[0].content}</p>
          </div>
            
        </div>
      </div>
    </div>
    );
  
}