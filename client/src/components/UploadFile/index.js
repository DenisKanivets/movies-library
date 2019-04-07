import React, {Component} from 'react';
import axios from "axios";
import './uploadFile.scss';
import example from './example.png'

class UploadFile extends Component {
    state = {
        uploadData: null
    };

    uploadFile = (e) => {
        e.preventDefault();
        let fileList = e.target.files.item(0);
        let reader = new FileReader();
        reader.onload = () => {
            let resultTxt = reader.result;
            let rows = resultTxt.split('\n');
            let resultArr = [];
            let titleObj = [];
            let yearObj = [];
            let formatObj = [];
            let starsObj = [];
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].length > 0) {
                    if (rows[i].includes('Title')) {
                        titleObj.push(rows[i].substring(7))
                    }
                    if (rows[i].includes('Release Year')) {
                        yearObj.push(rows[i].substring(14))
                    }
                    if (rows[i].includes('Format')) {
                        formatObj.push(rows[i].substring(8))
                    }
                    if (rows[i].includes('Stars')) {
                        starsObj.push(rows[i].substring(7))
                    }
                }
            }
            for (let i = 0; i < titleObj.length; i++) {
                let movieObj = {
                    title: titleObj[i],
                    year: yearObj[i],
                    format: formatObj[i],
                    stars: starsObj[i]
                };
                resultArr.push(movieObj)
            }
            this.setState({uploadData: resultArr})
        };
        reader.readAsText(fileList);
    };

    sendMovie = (e) => {
        const sendUploadMovie = this.state.uploadData;
        e.preventDefault();
        axios.post("/movies/upload", sendUploadMovie)
            .then(res => res.data)
            .then(console.log('file has been uploaded and movie has been added'))
            .then(this.setState({uploadData: null}))
            .catch(err => console.log(err));

        this.props.closeModal();
        this.props.childRefreshData();
    };

    render() {
        return (
            <>
                <form onSubmit={this.sendMovie} className="second-form">
                    <p className="info">You can import movies from .txt file with headers: Title, Release Year, Format
                        and Stars as in the image below. Than new movie or movies will be added to our library!</p>
                    <img src={example} alt="example"/>
                    <input onChange={this.uploadFile} required className="upload" type="file"/>
                    <input className="upload-btn" type="submit" value="Send file"/>
                </form>
            </>
        )
    }
}

export default UploadFile;
