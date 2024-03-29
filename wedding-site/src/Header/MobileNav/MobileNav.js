import tabContentBinding from '../../tabContentBinding'

import {
    useMatch,
    Link
} from 'react-router-dom'

export default function MobileNav() {
    var mobileTabs = Object.entries(tabContentBinding).map(([key, value]) => <MobileTab key={ key } title={ key } route={ value.route }/>)

    return (
        <div className='mobile-navbar'>
            {mobileTabs}
        </div>
    )
}

function MobileTab(props) {
    let match = useMatch({
        path: props.route,
        exact: (props.title === 'Home')
    })

    return (
        <div className={`mobile-tab ${ match ? 'active-mobile-tab' : ''}`}>
            <Link className='mobile-link' to={ props.route }><span>{ props.title }</ span></Link>
        </div>
    )
}