import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddBook extends Component {
    constructor() {
        super()

        this.state = {
            imgURL: '',
            title: '',
            author: '',
            genre: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(prop, e) {
        this.setState({
            [prop]: e
        })
    }

    addBook() {
        const body = {
            title: this.state.title,
            author: this.state.author,
            img: this.state.imgURL,
            description: this.state.description,
            genre: this.state.genre
        }

        axios.post('/api/addbook', body).then(response => {
        })
    }

    render() {
        console.log(this.state)
        return (
            <div classID='AddBook'>
                <img src={this.state.imgURL}/>
                img URL <input onChange={(e) => this.handleChange('imgURL', e.target.value)}></input>
                Title <input onChange={(e) => this.handleChange('title', e.target.value)}></input>
                Author <input onChange={(e) => this.handleChange('author', e.target.value)}></input>
                Genre <select value={this.state.genre} onChange={(e) => this.handleChange('genre', e.target.value)}>
                    <option value='Horror'>Horror</option>
                    <option value='Teen Fantasy'>Teen Fantasy</option>
                </select>
                Description <input onChange={(e) => this.handleChange('description', e.target.value)}></input>
                <Link to='/browse'><button onClick={() => this.addBook()}>Save Book</button></Link>

            </div>
        )
    }
}

export default AddBook