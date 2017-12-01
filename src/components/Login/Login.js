import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div id='Login'>Login Component
            <div className='mid-container'>
                    <p>Thiscounts</p>
                    <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
                </div>

                <div className='yeah'>yeah</div>
                <div className='no'>no</div>
            </div>
        )
    }
}

export default Login