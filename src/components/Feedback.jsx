import React from 'react';
import Grow from '@material-ui/core/Grow';



const Feedback = (props) => {

    console.log(props.contact)



    return (
        <div id='contact_me' style={{padding: '10%', color:' white',
        backgroundColor: '#54565a'}}>
          
                <h1>Feedback</h1>
            
             <div style={{width: '80vw'}}>
                    <form
                        className="w3-container"
                        action="https://formspree.io/mvowylly"
                        method="POST"
                    >
                        <label>
                            Name
                    <br></br>
                            <input type="text" style={{width: "50vw"}} name="name" className="w3-input" />
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                            Your Email
                    <br></br>
                            <input type="email" style={{width: "50vw"}} name="_replyto" className="w3-input" />
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                            Message
                    <br></br>
                            <textarea name="message"  style={{height: "20vh", width: "80vw"}} className="w3-input"></textarea>
                        </label>
                        <br></br>
                        <br></br>
                        <button className="bttn-stretch bttn-med bttn-primary" type="submit"  style={{backgroundColor: '#e33e42' ,
                                                                                                        padding: '3%',
                                                                                                        borderColor: 'transparent',
                                                                                                        fontWeight: 'bold',
                                                                                                        color: 'white',}}  value="Send">Send</button>
                    </form>
                    </div>
        </div>
    )
}

export default Feedback;