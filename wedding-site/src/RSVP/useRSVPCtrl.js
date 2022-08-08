import { useEffect, useState } from 'react';
import GuestRSVP from './GuestRSVP';
import services from '../services';

export default function useRSVPCtrl() {
    const s = services();

    const [numRSVPs, setNumRSVPs] = useState(1);
    const [guestRSVPs, setGuestRSVPs] = useState();

    function handleGuestCountChange(event) {
        var tempRSVPs = [];
        if (numRSVPs > 10) setNumRSVPs(10);
        
        if (!guestRSVPs || guestRSVPs.length === 0){
            for (var i = 0; i < numRSVPs; i++){
                tempRSVPs.push(<GuestRSVP key={i} send={sendRSVP} />)
            }

            setGuestRSVPs(tempRSVPs);
        }

        
        else if (numRSVPs > guestRSVPs.length) {
            for (var i = 0; i < numRSVPs - guestRSVPs.length; i++){
                tempRSVPs.push(<GuestRSVP key={i + guestRSVPs.length - 1} send={sendRSVP} />)
            }
    
            setGuestRSVPs([...guestRSVPs, ...tempRSVPs]);
        }


        else if (numRSVPs < guestRSVPs.length) {
            var diff = guestRSVPs.length - numRSVPs;
            for (var i = 0; i < guestRSVPs.length - diff; i++){
                tempRSVPs.push(guestRSVPs[i]);
            }

            setGuestRSVPs(tempRSVPs);
        }

    }

    function sendRSVP(args) {
        s.rsvp(args);
    }

    useEffect(() => {
        handleGuestCountChange();
    }, [numRSVPs])

    return {
        numRSVPs,
        setNumRSVPs,
        guestRSVPs
    }
}