import '../component-chat-css/chat.css'
import Contact from '../../component-contact/Contact'
const ChatSec=({})=>{
    const contactList=[{
        Name:"Siddharth Bhardwaj",
        Messages:[
            {
                "content":"message1",
                "sender":true,
            }
        ]
    },
    {
        Name:"Abhishek Singh",
        Messages:[
            {
                "content":"message1",
                "sender":true,
            }
        ]
    }
]

    
    return(
        contactList.map(
            contact => {
                // console.log(contact.Name);
                return <Contact contact={contact}/>
            }
        )
        

        
    )
}
export default ChatSec