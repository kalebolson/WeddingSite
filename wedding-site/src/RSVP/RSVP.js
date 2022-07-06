import { useState } from 'react'

export default function RSVP() {
    const [numRSVPs, setNumRSVPs] = useState(1);

    function handleGuestCountConfirm(event) {
        // TODO
    }


    return (
        <>
            <label htmlFor="count">Enter Number of Guests:</label>
            <input type="number" name="count" min='1' max='10' value={numRSVPs} onChange={(e) => setNumRSVPs(e.target.value)}></input>
            <button onClick={ handleGuestCountConfirm }>Confirm</button>
        </>
    )
}