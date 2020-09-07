import React, {Component} from 'react'

class Button extends Component{
    // constructor(props){
    //     super(props)
    // }
    // this.state={
    //     current: "0",
    //     previous: []
//}

    render(){
        return (
            <div className={`column-${this.props.cols}`}>
                <button className="calc-button" onClick={()=> {this.props.action(this.props.symbol)}}>{this.props.symbol}</button>
            </div>
        )
    }
}
export default Button