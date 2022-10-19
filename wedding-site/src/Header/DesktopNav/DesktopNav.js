import tabContentBinding from '../../tabContentBinding'
import Tab from './Tab/Tab'
import logo from '../../images/logo.svg'

export default function DesktopNav() {
    const tabs = Object.entries(tabContentBinding).map(([key, value]) => <Tab key={ key } title={ key } route={ value.route }/>)

    return (
        <div className='desktop-header'>
            <div className='desktop-logo'>
                <img src={logo} />
            </div>
                <div className='desktop-navbar'>
                    <div className='desktop-navbar-tab-container'>
                        {tabs}
                    </ div>
                
            </div>
        </div>

    )
}