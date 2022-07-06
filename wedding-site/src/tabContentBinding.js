import Home from './Home/Home'
import Gallery from './Gallery/Gallery'
import Location from './Location/Location'
import RSVP from './RSVP/RSVP'

const tabContentBinding = {
    'Home': {
        path: 'Home/Home.js',
        component: <Home />,
        route: '/'
    },
    'Gallery': {
        path: 'Gallery/Gallery.js',
        component: <Gallery />,
        route: '/gallery'
    },
    'Location': {
        path: 'Location/Location.js',
        component: <Location />,
        route: '/location'
    },
    'RSVP': {
        path: 'RSVP/RSVP.js',
        component: <RSVP />,
        route: '/rsvp'
    }
}

export default tabContentBinding