import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieCard.css';
import ReadMore from './ReadMore'

const MovieCard = props => {       
    return <>
            <div className="movie-card">
                <div className="movie-header manOfSteel"
                    style={{
                        padding: " 0",
                        margin: "0",
                        height: "367px",
                        width: "100 %",
                        display: "block",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        backgroundImage: "url(" + props.url  + ")",
                        backgroundSize: "cover"
                    }}
                >
                    <div className="header-icon-container">
                        <a href="#">
                            <i className="material-icons header-icon"></i>
                        </a>
                    </div>
                </div>
                <div className="movie-content">
                    <div className="movie-content-header">
                        <a href="#">
                            <h3 className="movie-title">  {props.title} </h3>
                        </a>
                    <div className="rates">
                        <StarRatingComponent
                        className={"RatingMovie"}
                        name="rate"
                        starCount={5}
                        value={props.rate}
                    /></div>
                    </div>
                    <div className="movie-info">
                        <div className="info-section">                 
                        <ReadMore>{props.description}</ReadMore> </div>
                    </div>
                </div>
            </div>
    </> 
}
export default MovieCard