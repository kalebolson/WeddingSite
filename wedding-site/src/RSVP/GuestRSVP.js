import { useState } from 'react'

export default function GuestRSVP(props) {
    const [name, setName] = useState();
    const [attending, setAttending] = useState();
    const [attendingNotClicked, setAttendingNotClicked] = useState(true);
    const [notes, setNotes] = useState();

    const submitDisabled = () => {
        if (!name || name === '' || attendingNotClicked) return true;
        else return false;
    }

    const attendingChanged = (value) => {
        setAttendingNotClicked(false);
        setAttending(value);
    }

    return (
        <div className='guest-rsvp'>
            <div className='guest-rsvp-field'>
                <label for='name'>Name:</label>
                <input id='name' type="text" onChange={e => setName(e.target.value)} className='name-textbox'></input>
            </div>
            <div className='guest-rsvp-field'>
                <label for='attending'>Attending:</label>
                    <label for='yes' className='radio-btn-label'>Yes</label>
                    <input name='attending' id='yes' type="radio" onClick={e => attendingChanged(true)} className='add-space'></input>
                    <label for='no' className='radio-btn-label'>No</label>
                    <input name='attending' id='no' type="radio" onClick={e => attendingChanged(false)}></input>
            </div>
            <div className='guest-rsvp-field'>
                <label for='notes'>Notes:</label>
                <textarea name='notes' type="text" onChange={e => setNotes(e.target.value)}></textarea>
            </div>
            <div className='guest-rsvp-field'>
                <button disabled={submitDisabled()} onClick={e => props.send({ name, attending, notes })}>RSVP</button>
            </div>
        </div>
    )
}