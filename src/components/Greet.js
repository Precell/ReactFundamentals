import React from 'react'


// function Greet(){
//     return <h1>Hello Precell.</h1>
// }

    const Greet = ({name, dept, hub}) => {
        // const {name, hub, dept} = props
        return (
            <div>
                <h1>Greet { name }, from { hub } as the head of { dept }</h1>
            </div>
        )
        
    }

export default Greet