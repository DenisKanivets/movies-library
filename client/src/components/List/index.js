import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import './list.scss';

class List extends Component {

    deleteMovie = (e) => {
        e.preventDefault();
        axios.post("/movies/delete/" + e.target.value)
            .then(console.log('movie has been deleted'))
            .catch(err => console.log(err));

        this.props.refreshData();
    };

    render() {
        let content = this.props.data.map((item, i) => {
            i++;
            return (
                <li key={i} className="item-block">
                    <img src="https://image.flaticon.com/icons/png/512/33/33692.png" alt="movie icon"/>
                    <div className="item-info">
                        <p>{item.title}</p>
                        <p>({item.year})</p>
                    </div>
                    <NavLink className="more-info" to={{pathname: item._id, state: {data: item}}}>More info</NavLink>
                    <button value={item._id} className="delete" onClick={this.deleteMovie}>Delete</button>
                </li>
            )
        });
        return (
            <>
                <ul className="content">{content}</ul>
            </>
        )
    }
}

export default List;
