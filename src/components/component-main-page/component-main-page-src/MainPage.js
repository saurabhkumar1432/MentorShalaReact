import '../component-main-page-css/MainPage.css'
import MessagePart from '../../component-messagePart/component-messagePart-src/MessagePart'
import '../component-main-page-css/MainPage.css'
import CardPart from '../../component-cardPart/component-cardPart-src/CardPart'
const MainPage=()=>{
    return(
        <div className="row main-container">
           <MessagePart/>
           
                <CardPart/>
        </div>
    )
}
export default MainPage