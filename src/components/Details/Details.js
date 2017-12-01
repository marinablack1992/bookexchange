import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
    constructor(){
        super()

        this.state = {
            book: {}
        }
    }

    componentDidMount(){
        axios.get(`/api/book/${this.props.match.params.id}`).then(response => {
            this.setState({
                book: response.data[0]
            })
        })
    }

    render(){
        return (
            <div classID='Details'>
            Title: {this.state.book.title}
            </div>
        )
    }
}

export default Details