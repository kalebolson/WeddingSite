import { useState } from 'react'

export default function GuestRSVP(props) {
    const [rsvp, setRSVP] = useState(props.rsvp);
    const [name, setName] = useState(getNameFromRSVP());
    const [attending, setAttending] = useState(rsvp.completed ? rsvp.attending : null);
    const [attendingNotClicked, setAttendingNotClicked] = useState(!rsvp.completed);
    const [notes, setNotes] = useState(getNotesFromRSVP());
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    function getNameFromRSVP() {
        return (rsvp.guestName !== '(Placeholder)') ? rsvp.guestName : '';
    }
    function getNotesFromRSVP() {
        if (!rsvp.notes && rsvp.isPlusOne){
            return '\"Plus One\" guest \n'
        }
        return rsvp.notes;
    }
    

    const submitDisabled = () => {
        if (!name || name === '' || attendingNotClicked) return true;
        else return false;
    }


    const attendingChanged = (value) => {
        setAttendingNotClicked(false);
        setAttending(value);
    }

    const handleSubmit = (event) => {
        if (props.send({ name, attending, notes })){
            setSubmitted(true);
        }
        else
        {
            setError(true);
        }

    }

    return (
        !submitted
        ?
        <div className='guest-rsvp'>
            <div className='guest-rsvp-field'>
                <label htmlFor='name'>Name:</label>
                {rsvp.isPlusOne
                ? <input placeholder='Enter Guest Name' id='name' type="text" 
                    onChange={e => setName(e.target.value)} className='guest-rsvp-field-plusone-input'
                    style={{display: 'block'}}></input>
                : <h3>{name}</h3>
                }
                
            </div>
            <div className='guest-rsvp-field'>
                <label htmlFor='attending'>Attending:</label>
                    <label htmlFor='yes' className='radio-btn-label'>Yes</label>
                    <input name='attending' id='yes' type="radio" onClick={e => attendingChanged(true)} className='add-space'></input>
                    <label htmlFor='no' className='radio-btn-label'>No</label>
                    <input name='attending' id='no' type="radio" onClick={e => attendingChanged(false)}></input>
            </div>
            <div className='guest-rsvp-field'>
                <label htmlFor='notes'>Notes / Dietary Restrictions:</label><br/>
                <textarea name='notes' type="text" onChange={e => setNotes(e.target.value)}>{notes}</textarea>
            </div>
            <div className='guest-rsvp-field'>
                <button disabled={submitDisabled()} onClick={e => handleSubmit(e)}>RSVP</button>
            </div>
        </div>
        :
        <div className='guest-rsvp thx-rsvp-container'>
            <h3 className='thx-rsvp'>Thank You!</h3>
        </div>
    )
}