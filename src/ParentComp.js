import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './components/PureComp'
import MemoComp from './components/MemoComp'

class ParentComp extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Precell'
        }
    }

   componentDidMount(){
       setInterval(() =>{
           this.setState({
               name: 'Precell'
           })
       }, 2000)
   } 

    render() {
        console.log('*********** PARENT COMPONENT***************');
        console.log(this.state.name);
        return (
            <div>
               Parent Component 
               <MemoComp name={this.state.name} />
              {/* <RegComp name={this.state.name}/>
              <PureComp name={this.state.name}/>*/}
            </div>
        )
    }
}

export default ParentComp
