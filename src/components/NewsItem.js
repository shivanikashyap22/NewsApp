import React from 'react'

const NewsItem=(props)=> {

        let { title, description, imgUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={!imgUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/15B81/production/_133316988_gettyimages-1999165796.jpg" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"80%", zIndex:"1"}}>
                            {source}
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className='cad-text'><small className='text-muted'>By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>      </div>
        )
    }

export default NewsItem
