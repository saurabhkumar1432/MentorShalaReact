import React, {Component} from "react"
class ModeChanger extends Component{
    render(){
        if(this.props.mode.id==0){
            return (
                <h1>{this.props.mode.name}</h1>
            )
        }
        else if(this.props.mode.id==1){
            return(
                <h1>{this.props.mode.name}</h1>
            )
        }
        else if(this.props.mode.id==2){
            return(
                <h1>{this.props.mode.name}</h1>
            )
        }
        else{
            return(
                <h1>{this.props.mode.name}</h1>
            )
        }
    }
}
export default ModeChanger