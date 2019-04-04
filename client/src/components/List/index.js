import React, {Component} from 'react';
import Movie from "../Movie";

class List extends Component {

    render() {
        return this.props.data.map((item, i) => {
            i++;
            return (
                <Movie key={i} data={item}/>
            )
        })
    }
}

export default List;
