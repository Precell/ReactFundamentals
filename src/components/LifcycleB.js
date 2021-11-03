import React, { Component } from 'react'

class LifcycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "Precell"
        }
        console.log('LifcycleB construtor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifcycleB getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('LifcycleB componentDidMount')
    }

        
    componentDidMount(){
        console.log('LifcycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('Lifecycle B shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, precState){
        console.log('Lifecycle B getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('Lifecycle B componentDidUpdate');
    }

    render() {
        console.log('Lifcycle render')
        return (
            <div>
                <h1>LifcycleB {this.props.name}</h1>      
            </div>
        )
    }
}

export default LifcycleB
