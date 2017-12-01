import React, { Component } from 'react';
import axios from 'axios';
import BookHolder from './BookHolder/BookHolder.js';
import Navbar from './../Navbar/Navbar.js';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: []
        }

        this.deleteFromCart = this.deleteFromCart.bind(this)
    }

    componentDidMount() {
        axios.get(`/api/usercart/${this.props.match.params.id}`).then(response => {
            this.setState({
                cart: response.data
            })
        })

    }

    deleteFromCart(bookid){
        axios.delete(`/api/deletecartitem/${this.props.match.params.id}/${bookid}`).then(response =>{
            this.setState({
                cart: response.data
            })
        })
    }


    render() {
        console.log('state', this.state.cart)
        return (
            <div classID='Cart'>
            <Navbar/>
                {this.state.cart.length ? this.state.cart.map(book => <BookHolder key={book.id} book={book}
                                                                                    deleteFromCart={this.deleteFromCart}/>): 'No items in cart.'}
            </div>
        )
    }
}

export default Cart