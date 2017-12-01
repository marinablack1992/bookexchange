import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './../Navbar/Navbar.js';
import { connect } from 'react-redux';



class Details extends Component {
    constructor() {
        super()

        this.state = {
            book: {}
        }
        this.deleteBook = this.deleteBook.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/book/${this.props.match.params.id}`).then(response => {
            this.setState({
                book: response.data[0]
            })
        })
    }

    deleteBook() {
        axios.delete(`/api/deletebook/${this.state.book.id}`).then(response => {
        })
    }

    addToCart() {
        axios.post(`/api/addcart/${this.state.book.id}/${this.props.user.id}`).then(response => {
        })

        axios.put(`/api/updateStock/${this.state.book.id}`).then(response => {
        })
    }

    render() {
        return (
            <div classID='Details'>
                <Navbar />
                <div><img src={this.state.book.img} /></div>
                <div>Title: {this.state.book.title}</div>
                <div>Author: {this.state.book.author}</div>
                <div>Genre: {this.state.book.genre}</div>
                <div>Instock: {this.state.book.instock === true ? 'Yes' : 'No'}</div>
                <div>Description: <br /> {this.state.book.description}</div>
                <Link to={`/editbook/${this.state.book.id}`}><button>Edit</button></Link>
                <Link to='/browse'><button onClick={() => this.deleteBook()}>Delete</button></Link>
                <Link to='/cart'><button onClick={() => this.addToCart()}>+Add To Cart</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Details)