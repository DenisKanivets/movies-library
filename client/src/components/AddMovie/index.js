import React, {Component} from 'react';
import axios from "axios";
import './addMovie.scss';

class AddMovie extends Component {
    state = {
        title: "",
        year: "",
        format: "",
        stars: "",
    };

    handleChangeTitle = (e) => {
        this.setState({title: e.target.value});
    };
    handleChangeYear = (e) => {
        this.setState({year: e.target.value});
    };
    handleChangeFormat = (e) => {
        this.setState({format: e.target.value});
    };

    handleChangeStars = (e) => {
        this.setState({stars: e.target.value});
    };

    sendMovie = (e) => {
        e.preventDefault();
        const sendMovie = {
            title: this.state.title,
            year: this.state.year,
            format: this.state.format,
            stars: this.state.stars,
        };

        axios.post("/movies/add", {sendMovie})
            .then(res => res.data)
            .then(console.log('movie was added'))
            .then(this.setState({title: "", year: "", format: "", stars: ""}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <form onSubmit={this.sendMovie}>
                    <input onChange={this.handleChangeTitle} type="text" value={this.state.title}
                           placeholder="Enter title of movie here..."/>
                    <input onChange={this.handleChangeYear} type="text" value={this.state.year}
                           placeholder="Enter release year here..."/>
                    <select required onChange={this.handleChangeFormat}>
                        <option/>
                        <option value="VHS">VHS</option>
                        <option value="DVD">DVD</option>
                        <option value="Blu-Ray">Blu-Ray</option>
                    </select>
                    <input onChange={this.handleChangeStars} type="text" value={this.state.stars}
                           placeholder="Enter movie stars here"/>
                    <input type="submit" value="Add movie!"/>
                </form>
            </>
        );
    }
}

export default AddMovie;
