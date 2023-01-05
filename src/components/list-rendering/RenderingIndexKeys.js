function RenderingIndexKey() {
    const fruits = ["Apple", "Banana" , "Orange"]
    const fruitList = fruits.map((fruit,index)=>(<h3 key={index}>{fruit}</h3>))
    return (<div> {fruitList} </div>)    
}
export default RenderingIndexKey