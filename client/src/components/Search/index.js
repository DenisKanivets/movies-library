import React, {Component} from 'react';
import './search.scss';

class Search extends Component {
    state = {
        titleSearch: '',
        actorSearch: ''
    };

    titleSearch = (e) => {
        this.setState({titleSearch: e.target.value.toLowerCase()});
        let filterData = this.props.data.filter(movie => {
            return movie.title.toLowerCase().includes(this.state.titleSearch);
        });
        this.props.updateData(filterData)
    };

    actorSearch = (e) => {
        this.setState({actorSearch: e.target.value.toLowerCase()});
        let filterData = this.props.data.filter(movie => {
            return movie.stars.toLowerCase().includes(this.state.actorSearch);
        });
        this.props.updateData(filterData)
    };

    render() {
        return (
            <div className="search-block">
                <input className="search-bar" type="text" onChange={this.titleSearch}
                       placeholder="Search movie by title..."/>
                <input className="search-bar" type="text" onChange={this.actorSearch}
                       placeholder="Search movie by actor..."/>
            </div>
        )
    }
}

export default Search;
