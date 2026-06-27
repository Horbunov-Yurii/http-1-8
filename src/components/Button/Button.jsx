import { Component } from "react";

class Button extends Component {
    render(){
        const {onClick} = this.props
        return(
            <button type="button" onClick={onClick} >Завантажити ще</button>
        )
    }
}

export default Button;