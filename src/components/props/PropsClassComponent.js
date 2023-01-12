import { Component } from "react";
class PropsClassComponent extends Component{

    render (){
        return <h1>Message: {this.props.message}</h1>
    }
}
export default PropsClassComponent