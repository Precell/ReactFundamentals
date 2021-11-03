import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Bye'
    //     })
    // }

    /*USE ARROW FUNCTIONS as class property changing method description  */

    clickHandler = () => {
        this.setState({
            message: 'Bye'
        })
    }

    
    render() {
        return (
            <div>
               <h1>{this.state.message}</h1>
               {/* Bind this keyword on the event handler this.clickHandler.bind(this)*/}
               <button onClick={this.clickHandler.bind(this)} >Click</button> <br/>                
               <button onClick={() => this.clickHandler()} >Click</button>   <br/>
                      {/*bind in the constructor  */}
               <button onClick={this.clickHandler} >Click</button>          

                
            </div>
        )
    }
}

export default EventBinding
























































































































































