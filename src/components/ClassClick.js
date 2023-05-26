import React , {Component} from "react";

class ClassClick extends Component{

    clickHandler() {
        console.log('class button was clicked')
    }

    render(){
        return(
        <div>
            <button onClick={this.clickHandler}>Class click</button>
        </div>
        )
    }
}

export default ClassClick