import React, {Component} from 'react';
import AddMovie from './components/AddMovie';
import List from "./components/List";
import axios from "axios";

class App extends Component {
    state = {
        mainData: []
    };

    componentDidMount() {
        axios.get("/movies")
            .then(res => this.setState({mainData: res.data}))
            .catch(err => console.log(err));
    };

    componentDidUpdate() {
        axios.get("/movies")
            .then(res => this.setState({mainData: res.data}))
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.mainData.length > 0) {
            return (
                <>
                    <AddMovie/>
                    <List data={this.state.mainData}/>
                </>
            )
        } else {
            return (
                <>
                    <AddMovie/>
                    <div>Loading...</div>
                </>
            )
        }
    }
}

export default App;
