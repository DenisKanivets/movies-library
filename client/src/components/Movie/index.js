import React, {Component} from 'react';
import './movie.scss';
import axios from "axios";
import {NavLink} from "react-router-dom";

class Movie extends Component {
    state = {
        deleteStatus: false
    };

    deleteMovie = (e) => {
        e.preventDefault();
        axios.post("/movies/delete/" + this.props.location.state.data._id)
            .then(this.setState({deleteStatus: true}))
            .catch(err => console.log(err));
    };

    render() {
        if (this.state.deleteStatus === false) {
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
                    <button className="delete-movie" onClick={this.deleteMovie}>Delete</button>
                </>
            )
        } else {
            return (
                <>
                    <NavLink className="back-to-main" to="/">Back to main page</NavLink>
                    <h3 className="delete-status">Movie has been deleted!</h3>
                </>
            )
        }
    }
}

export default Movie;
