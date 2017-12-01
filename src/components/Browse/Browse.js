import React, { Component } from 'react';

class Browse extends Component {
    constructor(){
        super();

        this.state = {
            books: []
        }
    }

    componentDidMount(){

    }
    
    render(){
        return (
            <div classID='Browse'>Browse Component</div>
        )
    }
}

export default Browse