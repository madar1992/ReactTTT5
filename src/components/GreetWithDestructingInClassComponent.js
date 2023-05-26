import React , {Component} from "react";

class GreetWithDestructingInClassComponent extends Component{

    render(){
               const {name, heroname} = this.props
        return(

            <h1>Welcome to {name} a.k.a {heroname}</h1>
        )
    }
}

export default GreetWithDestructingInClassComponent