import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';




class Navbar extends Component { 
    render(){
        return(
            <div classID='navbar'>
            <Link to='/browse'><h1>Browse</h1></Link>
            <Link to={`/cart/${this.props.user.id}`}><h1>Cart</h1></Link>
            <Link to='/shelf'><h1>My Shelf</h1></Link>
            <h1>Logout</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);