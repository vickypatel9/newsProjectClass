import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "sport",
        page: 1,
        totalResults: 0
    }

    static PropsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("hello");
        this.state = {

            articles: [],
            page: 1,
            loading: false
        }

        document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsWala`

    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ed88d90df614ae89cf06c4a69f8a903&page=${this.state.page}&pageSize=${this.props.pageSize}`
        //this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loading: false
        })
    };
    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ed88d90df614ae89cf06c4a69f8a903&page=${this.state.page}&pageSize=${this.props.pageSize}`
        //this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {

        this.updateNews();

    }

    handlePrevClick = async (props) => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews()

    }

    handleNextClick = async () => {

        this.setState({ page: this.state.page + 1 });
        this.updateNews()

    }
   

    render() {

        return (
          <div >
            <div className="container my-3">
                <div className="text-center">
                    <h2>NewApp - Tops HeadLines </h2>

                </div>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}

                >   
                <div className="container">
                    <div className="row my-5">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 75) : ""}
                                    imageUrl={element.urlToImage == null ? "https://i.ytimg.com/vi/6OKz-GeH4Y8/maxresdefault.jpg" : element.urlToImage}
                                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                                />
                            </div>
                        })}


                    </div>
                    </div>
                </InfiniteScroll>

                {/* <div className="container d-flex justify-content-between ">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick} >&larr;Prev Page</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick} >Next Page &rarr;</button>

                </div> */}


            </div>
            </div>
        )
    }
}

export default News