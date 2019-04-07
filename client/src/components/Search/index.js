import React, {Component} from 'react';
import './search.scss';

class Search extends Component {
    state = {
        data: this.props.data
    };

    titleSearch = (e) => {
        let filterTitleData = this.state.data.filter(item => {
            return item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        this.props.filterData(filterTitleData)
    };

    starsSearch = (e) => {
        let filterStarsData = this.state.data.filter(item => {
            return item.stars.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        this.props.filterData(filterStarsData)
    };

    render() {
        return (
            <form className="search-block">
                <input className="search-bar" type="text" onChange={this.titleSearch}
                       placeholder="Search movie by title..."/>
                <input className="search-bar" type="text" onChange={this.starsSearch}
                       placeholder="Search movie by actor..."/>
            </form>
        )
    }
}

export default Search;
