import tabContentBinding from '../../tabContentBinding'
import logo from '../../images/logo.svg';

import {
    useMatch,
    Link
} from 'react-router-dom'

export default function MobileNav({ tabContents }) {
    var mobileTabs = Object.entries(tabContents).map(([key, value]) => <MobileTab key={ key } title={ key } route={ value.route }/>)

    return (
        <div className='flex'>
            <div className='mobile-logo'>
                <img src={logo}></img>
            </div>
            <div className='mobile-navbar'>
                {mobileTabs}
            </div>
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