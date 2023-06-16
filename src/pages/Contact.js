import "./Contact.css"
import myImg from "../img/Bruce's Picture.jpg"

function Contact() {
    return(
        <div id="background_contact">
            <h2 id = "email">Email: guoziyuan72@gmail.com</h2>
            <img src = {myImg} alt = "My image" id = "myImg"></img>

            <p id = "p-body">Student at Vanderbilt University studying computer science</p>
        </div>
            
        
    )
}

export default Contact