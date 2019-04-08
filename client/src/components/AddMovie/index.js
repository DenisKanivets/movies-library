import React, {Component} from 'react';
import UploadFile from "../UploadFile";
import axios from "axios";
import './addMovie.scss';


class AddMovie extends Component {
    state = {
        openModal: false,
        title: "",
        year: "",
        format: "",
        stars: "",
    };

    modalForm = () => {
        this.setState({openModal: true});
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
            .then(console.log('movie has been added'))
            .then(this.setState({title: "", year: "", format: "", stars: "", openModal: false}))
            .catch(err => console.log(err));

        this.props.refreshData();
    };

    childRefreshData = () => {
        this.props.refreshData();
    };

    closeModal = () => {
        this.setState({openModal: false})
    };

    render() {
        if (this.state.openModal === false) {
            return (
                <div onClick={this.modalForm} className="open-form">+</div>
            )
        } else {
            return (
                <div className="form-block">
                    <form className="first-form" onSubmit={this.sendMovie}>
                        <input required onChange={this.handleChangeTitle} type="text" value={this.state.title}
                               placeholder="Enter title of movie here..."/>
                        <input required onChange={this.handleChangeYear} type="number" min="1" value={this.state.year}
                               placeholder="Enter release year here..."/>
                        <select required onChange={this.handleChangeFormat}>
                            <option/>
                            <option value="VHS">VHS</option>
                            <option value="DVD">DVD</option>
                            <option value="Blu-Ray">Blu-Ray</option>
                        </select>
                        <textarea required onChange={this.handleChangeStars} rows='10' cols='30'
                                  value={this.state.stars}
                                  placeholder="Enter movie stars here..."/>
                        <input className="add-movie" type="submit" value="Add movie"/>
                    </form>
                    <p className="or"> Or </p>
                    <UploadFile childRefreshData={this.childRefreshData} closeModal={this.closeModal}/>
                    <p className="cancel" onClick={() => this.setState({openModal: false})}>X</p>
                </div>
            )
        }
    }
}

export default AddMovie;
