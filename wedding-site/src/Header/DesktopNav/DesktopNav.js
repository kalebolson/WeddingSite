import tabContentBinding from '../../tabContentBinding'
import Tab from './Tab/Tab'

export default function DesktopNav() {
    const tabs = Object.entries(tabContentBinding).map(([key, value]) => <Tab key={ key } title={ key } route={ value.route }/>)

    return (
        <div className='desktop-navbar'>
            {tabs}
        </ div>
    )
}