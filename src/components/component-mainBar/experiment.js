const Experiment=(props)=>{
    if(props.mode.id==0){
        return(
            <div>hello card</div>
        )
    }
    else if(props.mode.id==1){
        return(
            <div>hello chat</div>
        )
    }
    else if(props.mode.id==2){
        return(
            <div>hello Community</div>
        )
    }
    else{
        return(
            <div>hello Setting</div>
        )
    }
}
export default Experiment