import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class Navbar extends Component { 
    render(){
        return(
            <div classID='navbar'>
            <Link to='/browse'><h1>Browse</h1></Link>
            <Link to='/cart'><h1>Cart</h1></Link>
            <Link to='/shelf'><h1>My Shelf</h1></Link>
            <h1>Logout</h1>
            </div>
        )
    }
}

export default Navbar;