import '../component-cardPart-css/Card.css'
import Carddata from '../component-cardPart-data/card-data'
const Card=(props)=>{
    // console.log(props.id);
    return(
        <div class="card">
            <img class="card-img-top" src={Carddata[props.id].profilePic} alt="Card image cap"></img>
            <div id='card-body'>
                <div id='nameDiv'>
                    <h1>{Carddata[props.id].firstName} {Carddata[props.id].lastName}</h1>
                </div>
                <div id="description">
                    <h4>{Carddata[props.id].description}</h4>
                </div>
            </div>
        </div>
    )
}
export default Card