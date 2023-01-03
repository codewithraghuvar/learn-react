import { Component } from "react";

class ClassEvent extends Component {
   constructor(){
    super();
    this.state = {
        counter:0,
        counterFive:0
    }
    // way 1-  you need to bind the event beause this is undefined 
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
   }

   increment(){
    this.setState({
        counter: this.state.counter + 1
    })
   }
   decrement(){
    this.setState({
        counter: this.state.counter > 0 ? this.state.counter - 1 : 0
    })    
   }

   //way 2 -  arrow function does not require bind so you can use this way also 
   incrementFivePlus = () => {
    this.setState({
        counterFive: this.state.counterFive + 5
    })
   }
   decrementFiveMinus = () => {
    this.setState({
        counterFive: this.state.counterFive > 0 ? this.state.counterFive - 5 : 0
    })    
   }

    render() {
        return(
            <div>
                <h1>Counter :{this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                
                <h1>CounterFive :{this.state.counterFive}</h1>
                <button onClick={this.incrementFivePlus}>Increment 5 Plus</button>
                <button onClick={this.decrementFiveMinus}>Decrement 5 Minus</button>
            </div>
        )
    }
}
export default ClassEvent