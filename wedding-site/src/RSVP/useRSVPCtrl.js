import { useState } from 'react';
import GuestRSVP from './GuestRSVP';
import services from '../services';

export default function useRSVPCtrl() {
    const s = services();

    const [numRSVPs, setNumRSVPs] = useState(1);
    const [guestRSVPs, setGuestRSVPs] = useState();

    function handleGuestCountConfirm(event) {
        var tempRSVPs = [];
        for (var i = 0; i < numRSVPs; i++){
            tempRSVPs.push(<GuestRSVP send={sendRSVP} />)
        }

        setGuestRSVPs(tempRSVPs);
    }

    function sendRSVP(args) {
        s.rsvp(args);
    }

    return {
        numRSVPs,
        setNumRSVPs,
        handleGuestCountConfirm,
        guestRSVPs
    }
}