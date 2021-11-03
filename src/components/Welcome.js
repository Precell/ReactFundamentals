import React, { Component } from 'react'

 class Welcome extends Component {
    render(){
        const {name, dept, hub} = this.props
        return <h1>Welcome {name} from {hub} the head of {dept} </h1>
    }
}

export default Welcome