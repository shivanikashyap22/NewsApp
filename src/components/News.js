import React, { Component, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News=(props)=>{
const [articles, setArticles]=useState([])
const [loading, setLoading]=useState(true)
const [page, setPage]=useState(1)
const [totalResults, setTotalResults]=useState(0)



const capitalizeFirstCharacter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
}
   
const updateNews=async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbaeec5b025b4b1196023bdc0720d805 `;
  setLoading(true)
  console.log(url, "url")
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
}

    useEffect(()=> {
        updateNews()
    }, [])

 const   handleNextClick = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
            
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dbaeec5b025b4b1196023bdc0720d805&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true })
        //     let data = await fetch(url);
        //     let parseData = await data.json()
        //     this.setState({ loading: false })

        //     this.setState(
        //         {
        //             page: this.state.page + 1,
        //             articles: parseData.articles
        //         }
        //     )
        // }
        setPage(page+1)   
            updateNews()

    }
  const   handlePreviousClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dbaeec5b025b4b1196023bdc0720d805&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parseData = await data.json()
        // this.setState({ loading: false })
        // this.setState(
        //     {
        //         page: this.state.page - 1,
        //         articles: parseData.articles
        //     }
        // )
        setPage(page-1)
       updateNews()
    }

    // const   fetchMoreData = async () => {
    //     setPage(page-1)
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dbaeec5b025b4b1196023bdc0720d805&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //           let data = await fetch(url);
    //     let parseData = await data.json()
    //   setArticles(articles.concat(parseData.articles))
    //   setTotalResults(parseData.totalResults)
     
    // }
 
        return (
            <div className="container my-3">
                <h1 className='text-center' style={{margin:"40px 0px"}}>

                    <h1>News Headlines</h1>
                    {loading && <Spinner />}
                </h1>


                <div className='row'>
                    {!loading && articles.map((ele) => {
                        return <div className='col-md-4' key={ele.url}>
                            <NewsItem title={ele.title ? ele.title.slice(0, 40) : ""} description={ele.description ? ele.description.slice(0, 88) : ""} imgUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>
                        </div>
                    })}


                </div>
                <div className='container d-flex justify-content-between my-5'>
                    <button disabled={page <= 1} type="button" class="btn btn-dark" onClick={handlePreviousClick}>&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults /props.pageSize)} type="button" class="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div>


            </div>
        )
    }


News.defaultProps={
    country:"us",
    pageSize:8,
    category:"general"
}
News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.number,

}

export default News
