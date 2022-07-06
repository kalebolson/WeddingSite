import DesktopNav from "./DesktopNav/DesktopNav"
import MobileNav from "./MobileNav/MobileNav"

export default function Header(props) {


    return (
        <nav className='header-section'>
            { props.parent.isDesktop
                ? <DesktopNav />
                : <MobileNav />
            }
        </nav>
    )
}