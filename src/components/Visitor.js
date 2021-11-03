import React, { Component } from 'react'

class Visitor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello visitor'
        }
    }

    changeMessage (){
         
        this.setState({
            message:'GoodBye Visitor'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* The method is passed in the function body handler inside the event */}
                <button onClick={ () => this.changeMessage()} >Thank you</button>
            </div>
        )
    }
}

export default Visitor
