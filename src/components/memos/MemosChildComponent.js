import React from "react"
const MemosChildComponent = (props) => {
    console.log('child rendered')
    return (
        <React.Fragment>
            <div>This is a child count {props.count}</div>
        </React.Fragment>
    )
}

export default React.memo(MemosChildComponent) 