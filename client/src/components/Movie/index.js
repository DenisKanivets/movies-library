import React, {Component} from 'react';
import './movie.scss';
import axios from "axios";

class Movie extends Component {

    deleteMovie = (e) => {
        e.preventDefault();
        axios.delete("/movies/delete/" + this.props.data._id)
            .then(console.log('movie was deleted'))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="movie-item">
                <span>{this.props.data.uniqId}</span>
                <span>{this.props.data.title}</span>
                <span>{this.props.data.year}</span>
                <span>{this.props.data.format}</span>
                <span>{this.props.data.stars}</span>
                <form onSubmit={this.deleteMovie}>
                    <input type="submit" value="Delete"/>
                </form>
            </div>
        )
    }
}

export default Movie;
