import React, { Component } from 'react';
import { getBooks } from './../../ducks/reducer.js';
import { connect } from 'react-redux'
import Navbar from './../Navbar/Navbar.js'
import { Link } from 'react-router-dom';



class Browse extends Component {
    constructor() {
        super();

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        this.props.getBooks().then(response => {
            this.setState({
                books: this.props.allBooks
            })
        })

    }

    render() {
        return (
            <div classID='Browse'>
                <Navbar />

                {this.state.books.length ? this.state.books.map(book => {
                    return (
                        <div>
                            <div>Title: {book.title}</div>
                            <div>Author: {book.author}</div>
                            <div>Instock: {book.instock === true ? 'Yes' : 'No'}</div>
                            <div><img src={book.img} /></div>
                            <Link to={`/details/${book.id}`}><button>Details</button></Link>
                        </div>
                    )
                }) : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allBooks: state.allBooks,

    }
}

const mapDispatchToProps = {
    getBooks: getBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)