function FunctionEvent (){
    function handleClick(){
        console.log('Click Called')
    }
    return (
        <div>
            Funcation event 
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default FunctionEvent