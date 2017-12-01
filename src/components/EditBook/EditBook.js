import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class EditBook extends Component {
    constructor() {
        super();

        this.state = {
            book: {},
            imgURL: '',
            title: '',
            author: '',
            genre: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }

    
    componentDidMount() {
        axios.get(`/api/book/${this.props.match.params.id}`).then(response => {
            this.setState({
                book: response.data[0],
                imgURL: response.data[0].img,
                title: response.data[0].title,
                author: response.data[0].author,
                genre: response.data[0].genre,
                description: response.data[0].description,
            })
        })
    }
    
    handleChange(prop, e) {
        this.setState({
            [prop]: e
        })
    }

    updateBook(){
        const body = {
            title: this.state.title, 
            author: this.state.author, 
            img: this.state.imgURL, 
            description: this.state.description, 
            genre: this.state.genre
        }
        axios.put(`/api/updatebook/${this.props.match.params.id}`, body).then(response =>{
        })
    }
    
    

    render() {
        console.log('editbook',this.state)
        return (
            <div classID='EditBook'>
                <img src={this.state.imgURL} />
                img URL <input onChange={(e) => this.handleChange('imgURL', e.target.value)}></input>
                Title <input onChange={(e) => this.handleChange('title', e.target.value)}></input>
                Author <input onChange={(e) => this.handleChange('author', e.target.value)}></input>
                Genre <select value={this.state.genre} onChange={(e) => this.handleChange('genre', e.target.value)}>
                    <option value='Horror'>Horror</option>
                    <option value='Teen Fantasy'>Teen Fantasy</option>
                </select>
                Description <input onChange={(e) => this.handleChange('description', e.target.value)}></input>
                <Link to='/browse'><button onClick={this.updateBook}>Edit</button></Link>

            </div>
        )
    }
}

export default EditBook