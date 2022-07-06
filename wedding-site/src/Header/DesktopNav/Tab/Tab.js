import {
    useMatch,
    Link
} from 'react-router-dom'

export default function Tab(props) {
    let match = useMatch({
        path: props.route,
        exact: (props.title === 'Home')
    })

    return (
        <div className={`desktop-tab ${ match ? 'active' : ''}`}>
            <Link to={ props.route }>{ props.title }</Link>
        </div>
    )
}