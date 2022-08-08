import useRSVPCtrl from './useRSVPCtrl';

export default function RSVP() {
    var ctrl = useRSVPCtrl();



    return (
        <>
            <label htmlFor="count">Enter Number of Guests:</label>
            <input type="number" name="count" min='1' max='10' value={ctrl.numRSVPs} onChange={(e) => ctrl.setNumRSVPs(e.target.value)}></input>
            <div className='guest-rsvps'>
                {ctrl.guestRSVPs}
            </div>
        </>
    )
}