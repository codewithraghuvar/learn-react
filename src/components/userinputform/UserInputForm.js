import React , { Component  } from "react";
class UserInputForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstname : '',
            lastname: '',
            fullname: ''
         }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
 
    handleFirstNameChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.setState({
            fullname: this.state.firstname + this.state.lastname
        })
    }
    
    render() {    
        return (        
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>FirstName </label> : 
                    <input type="text" value={this.state.firstname} onChange={this.handleFirstNameChange}/>
                </div>
                <div>
                    <label>LastName </label> : 
                    <input type="text" value={this.state.lastname} onChange={this.handleLastNameChange}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>   
                <div>
                <label>Fullname</label>:{ this.state.fullname} 
                
                </div>        
            </form>        
        )
    } 
}
export default UserInputForm
