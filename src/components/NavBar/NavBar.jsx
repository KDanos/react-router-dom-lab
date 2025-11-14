import './NavBar.css'
import { Link } from 'react-router'

const NavBar = () => {
    return (
        <ul>
            <Link to="/" >Home</Link>
            <Link to="/mailboxes">Mailboxes</Link>
            <Link to="/new-mailbox">New Mailbox</Link>
        </ul>
    )
}
export default NavBar
