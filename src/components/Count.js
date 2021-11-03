import React, { Component } from 'react'

 class Count extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increement() {
        // this.setState({
        //     count: this.state.count + 2 
        // }, 
        // () =>{
        //     console.log('Callback function', this.state.count)
        // })

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    
    increementFive(){
        this.increement()
        this.increement()
        this.increement()
        this.increement()
        this.increement()
    }

    render() {
        return (
            <div>
                <h1>count - {this.state.count}</h1>
                <button onClick={()=>this.increementFive()}>increement</button>                 
            </div>
        )
    }
}

export default Count
