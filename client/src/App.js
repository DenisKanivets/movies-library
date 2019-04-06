import React, {Component} from 'react';
import AddMovie from './components/AddMovie';
import List from "./components/List";
import Movie from "./components/Movie";
import Header from "./components/Header";
import axios from "axios";
import {Switch, Route} from "react-router-dom";

class App extends Component {
    state = {
        mainData: []
    };

    async componentDidMount() {
        // let alphabetOrderData = [];
        await axios.get("/movies")
            .then(res => this.setState({mainData: res.data}))
            .catch(err => console.log(err));

        // alphabetOrderData.sort(function (a, b) {
        //     let nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
        //     if (nameA < nameB)
        //         return -1;
        //     if (nameA > nameB)
        //         return 1;
        //     return 0;
        // });
        // this.setState({mainData: alphabetOrderData})
    };

    // componentDidUpdate() {
    // axios.get("/movies")
    //     .then(res => this.setState({mainData: res.data}))
    //     .catch(err => console.log(err));
    //
    // let alphabetOrderData = [];
    // axios.get("/movies")
    //     .then(res => alphabetOrderData = res.data)
    //     .catch(err => console.log(err));
    //
    // alphabetOrderData.sort(function (a, b) {
    //     let nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
    //     if (nameA < nameB)
    //         return -1;
    //     if (nameA > nameB)
    //         return 1;
    //     return 0;
    // });
    // this.setState({mainData: alphabetOrderData})
    // }

    render() {
        if (this.state.mainData.length > 0) {
            return (
                <>
                    <Header/>
                    <AddMovie/>
                    <Switch>
                        <Route exact path="/" render={() => (<List data={this.state.mainData}/>)}/>
                        <Route exact path="/:id" component={Movie}/>
                    </Switch>
                </>
            )
        } else {
            return (
                <>
                    <Header/>
                    <AddMovie/>
                    <div className="loading">Loading...</div>
                </>
            )
        }
    }
}

export default App;
