import Home from './Home/Home'
import Gallery from './Gallery/Gallery'
import Location from './Location/Location'
import RSVP from './RSVP/RSVP'

function tabContentBinding(args) {

    return {
        'Home': {
            path: 'Home/Home.js',
            component: <Home rootCtrl={args.rootCtrl} />,
            route: '/'
        },
        'Gallery': {
            path: 'Gallery/Gallery.js',
            component: <Gallery rootCtrl={args.rootCtrl} />,
            route: '/gallery'
        },
        'Location': {
            path: 'Location/Location.js',
            component: <Location rootCtrl={args.rootCtrl} />,
            route: '/location'
        },
        'RSVP': {
            path: 'RSVP/RSVP.js',
            component: <RSVP rootCtrl={args.rootCtrl} />,
            route: '/rsvp'
        }
    }
} 

export default tabContentBinding