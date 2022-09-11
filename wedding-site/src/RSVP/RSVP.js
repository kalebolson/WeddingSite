import useRSVPCtrl from './useRSVPCtrl';
import { useState } from 'react';

export default function RSVP() {
    var ctrl = useRSVPCtrl();
    const [name, setName] = useState();


    return (
        <>
            <div className='init-rsvp-section'>
                <label style={{display: "block"}} htmlFor='init-rsvp-name'>Enter Name as it appears on invitation:</label>
                <div className='init-rsvp-input-section'>
                    <input className='init-rsvp-name' id='init-rsvp-name' type='text' placeholder='Your Name' 
                    onChange={e => setName(e.target.value)} />
                    <button className='init-rsvp-enter' onClick={e => ctrl.nameLookup(name)}>Enter</button>
                </div>
            </div>
            
            
            <div className='guest-rsvps'>
                {ctrl.guestRSVPs}
            </div>
        </>
    )
}