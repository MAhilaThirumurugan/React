import React from'react';
import ReactDOM from'react-dom';
class Joinus extends React.Component{
    constructor(){
        super();
        this.state={username:""}
    }
    uservalue=(event)=>
    {
        this.setState({username:event.target.value});
    }
    render()
    {
        return(
            <form><h1>
                Hello this is registration form {this.state.username}</h1>
                Enter your name:<input type="text" name="username" onchange={this.uservalue}/>
               Enter your password:<input type="password" name="password" onchange={this.uservalue}/></form>
        )
    }
    }

export default Joinus;