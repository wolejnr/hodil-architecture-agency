import React from 'react';
import {
    Link
} from 'react-router-dom';

export default function BlogArchive(props) {
    const data = props.data;

    let loopBlogArchive = data.map((blog, i) => {
        return(
            <div className="row mb-4">
                <div className="col">
                    <div class="blog-post">
                        <h2 class="blog-post-title">{blog.title}</h2>
                        <p class="blog-post-meta">{blog.date} by <a href="/">{blog.author}</a></p>

                        <p>
                            {blog.summary}
                        </p>
                        
                        <div>
                            <Link className="round-bar plain-btn" to={`/blog/${blog.slug}`}>Continue Reading</Link>
                        </div>
                        <hr/>
                    </div>
                </div>    
            </div>
        );
    });
  
    return (
      <div className="container">
        {loopBlogArchive}
      </div>
    );
  
}