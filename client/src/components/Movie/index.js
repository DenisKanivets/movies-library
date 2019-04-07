import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './movie.scss';

class Movie extends Component {

    render() {
        let item = this.props.location.state.data;
        return (
            <>
                <NavLink className="back-to-main" to="/">Back to main page</NavLink>
                <div className="movie-item">
                    <img src="https://image.flaticon.com/icons/png/512/33/33692.png" alt="movie icon"/>
                    <div className="movie-more-info">
                        <p className="uniq-id">№ {item.uniqId}</p>
                        <p className="title">{item.title}</p>
                        <p className="year"><b>Release Year:</b> {item.year}</p>
                        <p className="format"><b>Format:</b> {item.format}</p>
                        <p className="stars"><b>Starring:</b> {item.stars}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Movie;
