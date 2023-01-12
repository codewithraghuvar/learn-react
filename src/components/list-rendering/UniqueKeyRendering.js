function UniqueKeyRendering() {
    const fruits = [
        {id: 1 , name:"Apple"},
        {id: 2 , name:"Banana"},
        {id: 3 , name:"Orange"},
        {id: 4 , name:"Chiku"}
    ]
    const fruitList = fruits.map((fruit,index)=>(<h3 key={fruit.id}>{fruit.name}</h3>))
    return (<div> {fruitList} </div>)    
}
export default UniqueKeyRendering