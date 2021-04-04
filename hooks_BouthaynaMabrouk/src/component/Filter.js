import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Filter.css';

const Filter = ( { serch, serchRate } ) => {
    const [ rating, setRating ] = useState( 0 );

    const hundleChange = ( e ) => {
        serch( e.target.value );
        setRating( 0 );
    }
    const hundleClick = () => {
        setRating( 0 );
        serchRate( 0 );
        document.getElementById( "title" ).value = '';

        serch( "" );
    }
    const onStarClick = ( nextValue, prevValue, name ) => {
        serchRate( nextValue );
        setRating( nextValue );
       document.getElementById( "title" ).value = '';
    }

    return <div>
        <div className="contain">
            <div className="form-group" style={{ marginLeft: "10%", marginTop: "2%" }}>
                <div className="input-container">
                    <i className="fa fa-search icon"></i>
                    <input id="title" onChange={hundleChange} type="text" className="form-control" placeholder="Search Movie" />
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginRight: "150px" }}>
                
                <StarRatingComponent
                    name="rate"
                    className={"Rating"}
                    starCount={5}
                    value={rating}
                    onStarClick={onStarClick.bind( this )}
                    emptyStarColor={"white"} />
                
                <a className="link-a" style={{color: "white", cursor: "pointer", fontSize: "16px", marginLeft: "15px"
                }} onClick={hundleClick} id="reset">
                    Reset Search
                     </a>
                    </div>
                   </div>    
        </div>
}
export default Filter