import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import AddMovie from './components/AddMovie';
import List from "./components/List";
import Movie from "./components/Movie";
import Search from "./components/Search";
import axios from "axios";
import './app.scss';

class App extends Component {
    state = {
        refresh: false,
        mainData: []
    };

    orderFunc() {
        let alphabetOrderData = this.state.mainData;
        alphabetOrderData.sort(function (a, b) {
            let nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        });
        this.setState({mainData: alphabetOrderData})
    };

    async componentDidMount() {
        await axios.get("/movies")
            .then(res => this.setState({mainData: res.data}))
            .catch(err => console.log(err));
        this.orderFunc();
    };

    refreshData = () => {
        this.setState({refresh: true})
    };

    async componentDidUpdate() {
        if (this.state.refresh) {
            await axios.get("/movies")
                .then(res => this.setState({mainData: res.data}))
                .catch(err => console.log(err));
            this.setState({refresh: false});
            this.orderFunc();
        }
    };

    filterData = (value) => {
        this.setState({mainData: value})
    };

    render() {
        if (this.state.mainData.length > 0) {
            return (
                <>
                    <Header/>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <>
                                <Search filterData={this.filterData} data={this.state.mainData}/>
                                <AddMovie refreshData={this.refreshData}/>
                                <List data={this.state.mainData} refreshData={this.refreshData}/>
                            </>
                        )}/>
                        <Route exact path="/:id" component={Movie}/>
                    </Switch>
                </>
            )
        } else {
            return (
                <>
                    <Header/>
                    <AddMovie refreshData={this.refreshData}/>
                    <div className="loading">Loading...</div>
                </>
            )
        }
    }
}

export default App;
