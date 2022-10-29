import '../component-contact/Contact.css'
const Contact=(props)=>{
    // console.log(Name);
    return(
        
        <div id="contactContainer">
            <img id="contactImage"></img>
            <div id="contactName"> {props.contact.Name}</div>
            <div id="contactLastmessage"></div>
        </div>
    )
}
export default Contact