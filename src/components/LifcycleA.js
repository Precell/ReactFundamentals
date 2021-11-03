import React, { Component } from 'react'
import LifcycleB from './LifcycleB'

class LifcycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "Precell"
        }
        console.log('LifcycleA construtor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifcycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('LifcycleA componentDidMount')
    }


    // Update lifecycle methods

    shouldComponentUpdate(){
        console.log('Lifecycle A shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, precState){
        console.log('Lifecycle A getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('lifecycle A componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name:'Praecella'
        })
    }

    render() {
        console.log('Lifcycle render')
        return (
            <div>
                <h1>LifcycleA </h1>      
                <LifcycleB name={this.state.name}/> 
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifcycleA
