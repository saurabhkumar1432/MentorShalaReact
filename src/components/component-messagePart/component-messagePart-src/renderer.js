// import { render } from "@testing-library/react"
import { Component } from "react";

const X=(props)=>{
    if(props.mode.id==0){
        return(
            <div>Message</div>
        )
    }
    else if(props.mode.id==1){
        return(
            <div>Matches</div>
        )
    }
}
export default X