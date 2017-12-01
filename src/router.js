import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/Login/Login.js';
import AddBook from './components/AddBook/AddBook.js'
import Browse from './components/Browse/Browse.js'
import Cart from './components/Cart/Cart.js'
import Details from './components/Details/Details.js'
import EditBook from './components/EditBook/EditBook.js'
import MyShelf from './components/MyShelf/MyShelf.js'

export default (
    <Switch>
        <Route component={Login} exact path='/'/>
        <Route component={AddBook} exact path='/addbook'/>
        <Route component={Browse} exact path='/browse'/>
        <Route component={Cart} exact path='/cart'/>
        <Route component={Details} exact path='/details'/>
        <Route component={EditBook} exact path='/editbook'/>
        <Route component={MyShelf} exact path='/shelf'/>
    </Switch>
)