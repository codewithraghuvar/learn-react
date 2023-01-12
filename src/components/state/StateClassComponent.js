import { Component } from "react";

class StateClassComponent extends Component {
   constructor(){
    super();
    this.state = {
        counter:0
    }
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

    render() {
        return(
            <div>
                <h1>Counter :{this.state.counter}</h1>
                <button onClick={()=> this.increment()}>Increment</button>
                <button onClick={()=> this.decrement()}>Decrement</button>
            </div>
        )
    }
}
export default StateClassComponent