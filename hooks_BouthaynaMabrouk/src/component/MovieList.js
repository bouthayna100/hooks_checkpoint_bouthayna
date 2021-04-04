import React, { useState } from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'
import Filter from './Filter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieList.css';
const MovieList = props => {
    const [ movies, setMovies ] = useState( props.list );
    const [ liste, setListe ] = useState( props.list );

    return (
        <div >

            <Filter serch={( title ) => {
                title === '' ? setMovies( liste ) :
                    setMovies( liste.filter( elt => elt.title.toLowerCase().startsWith( title.toLowerCase() ) ||
                        elt.title.toUpperCase().startsWith( title.toUpperCase() ) ) );
            }
            }
                serchRate={( rating ) => {
                    rating === 0 ? setMovies( liste ) :
                        setMovies( liste.filter( elt => elt.rate === parseInt( rating ) ) );
                }} />
            
            <nav className="navbar navbar-expand-md navbar-main border-bottom">
                <div className="container-fluid">
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#dropdown6" aria-expanded="false"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="navbar-collapse collapse" id="dropdown6" >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"> <a className="nav-link" href="" data-abc="true">About</a> </li>

                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="" data-toggle="dropdown" data-abc="true" aria-expanded="false">Movies</a>
                                <div className="dropdown-menu"> <a className="dropdown-item" href="" data-abc="true">Horror</a> <a className="dropdown-item" href="" data-abc="true">Romantic</a> <a className="dropdown-item" href="" data-abc="true">Social</a> <a className="dropdown-item" href="" data-abc="true">Action</a> </div>
                            </li>
                            <li className="nav-item"> <a className="nav-link" href="" data-abc="true">Least</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="" data-abc="true">Contact</a> </li>
                        </ul>
                        
                        <AddMovie add={( movie ) => {
                            document.getElementById( "title" ).value = '';
                            document.getElementById( "reset" ).click();
                            setMovies( [ ...liste, movie ] );
                            setListe( [ ...liste, movie ] );
                        }} />
                    </div>
                </div>
            </nav>
           
            
            <div className="container">
                {movies.map( elt =>
                    <MovieCard title={elt.title} description={elt.description} rate={elt.rate} url={elt.url} />
                )}
            </div>
            <footer className="footer">
                <p>
                    ©Copyright 2021 with Movies.com. All rights reserved.
        </p>
            </footer>
        </div> )
}
export default MovieList

