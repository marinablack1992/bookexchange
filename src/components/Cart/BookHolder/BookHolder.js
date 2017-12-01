import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function (props) {
    return (
        <div>
            <div><img src={props.book.img} /></div>
            <div>{props.book.title}</div>
            <div>by {props.book.author}</div>
            <div>Instock: Yes</div>
            <Link to={`/details/${props.book.id}`}><button>Details</button></Link>
            <button onClick={() => props.deleteFromCart(props.book.id)}>
                -Remove from cart</button>
        </div>
    )
}
