import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card my-3" style={{ width: "18rem" }}>
                    <div style={{
                        display:"flex",
                        justifyContent:'flex-end',
                        position:'absolute',
                        right:'0'
                    }

                    }>
                    <span class="badge rounded-pill bg-danger">
                            { source}
                            
                        </span>

                    </div>
                    <img src={imageUrl} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-dark">Read More ... </a>
                        <p className="card-text"><small className="text-muted">By-{author == null ? "Unknown" : author} , on {new Date(date).toGMTString()}-</small></p>

                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem