import React, { useState } from "react"
import MemosChildComponent from "./MemosChildComponent"
const MemosParentComponent = () => {
    const [parentCount, setParentCount] = useState(0)
    const [childCount, setChildCount] = useState(0)
       
    const changeParentCount = () => {
        setParentCount(parentCount + 1)
    }
    
    const changeChildCount = () => {
        setChildCount(childCount + 1)
    }
    return (
        <React.Fragment>
            <div>This is a parent component count {parentCount}</div>
            <button onClick={changeParentCount}>Increment Parent Count</button>
            <MemosChildComponent count= {childCount}/>
            <button onClick={changeChildCount}>Increment Child Count</button>
        </React.Fragment>
    )
}

export default MemosParentComponent