import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';

const useAppCtrl = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
      });
    const isMobile = !isDesktop;

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return {
        isDesktop,
        isMobile,
        count, 
        increment
    }
}

export default useAppCtrl;