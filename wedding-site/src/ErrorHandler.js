import { useState } from 'react'
import PubSub from 'pubsub-js'
import closeBtnImg from './images/close-round-icon.svg'

export default function ErrorHandler(props) {
    const [active, setActive] = useState(false);
    const [message, setMessage] = useState("Unknown Error");

    PubSub.subscribe("error", (message, data) => {
        setActive(true);
        setMessage(data);
    })

    function close() {
        setActive(false);
        setMessage("Unknown Error");
    }
    
    if (active)
        return (
            <div className='splash-guard'>
                <div className='err-content'>
                    <h3>{message}</h3>
                    <p>Please call or text Kaleb at (612)804-3445 with any site issues!</p>
                    <img src={closeBtnImg} className='close-btn' onClick={(e) => close()} />
                </div>
            </div>
        );
}