import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './list.scss';
import Search from "../Search";

class List extends Component {

    state = {
        listData: this.props.data,
        titleSearch: '',
        actorSearch: ''
    };

    updateData = (value) => {
        this.setState({listData: value})
    };

    orderFunc = (e) => {
        e.preventDefault();
        let alphabetOrderData = this.state.listData;
        alphabetOrderData.sort(function (a, b) {
            let nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        });
        this.setState({listData: alphabetOrderData})
    };

    render() {
        let content = this.state.listData.map((item, i) => {
            i++;
            return (
                <li key={i} className="item-block">
                    <img src="https://image.flaticon.com/icons/png/512/33/33692.png" alt="movie icon"/>
                    <div className="item-info">
                        <p className="title">{item.title}</p>
                        <p className="year">({item.year})</p>
                    </div>
                    <NavLink className="show-more" to={{pathname: item._id, state: {data: item}}}>More info</NavLink>
                </li>
            )
        });

        return (
            <>
                <Search updateData={this.updateData} data={this.props.data}/>
                <button className="order-btn" onClick={this.orderFunc}>Alphabetical Order</button>
                <ul className="content">{content}</ul>
            </>
        )
    }
}

export default List;
