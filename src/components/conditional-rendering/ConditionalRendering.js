//import { useState } from "react"
function ConditionalRendering() {
    let display = false
    /*
    let output
    if(display){
        output = <h1> if statement display</h1>
    } else {
        output = <h1> else statement display</h1>
    }
    return <div> {output} </div>
    */
    return display ? ( <h1> if statement display</h1>) : ( <h1> else statement display</h1>)
    
}

export default ConditionalRendering