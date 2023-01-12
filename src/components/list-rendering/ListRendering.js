function ListRendering() {
    const products = ["Computer", "Keyboard" , "Mouse" , "Modem"]
    const productList = products.map((product)=>(<h3 key={product}>{product}</h3>))
    return (<div> {productList} </div> )    
}
export default ListRendering