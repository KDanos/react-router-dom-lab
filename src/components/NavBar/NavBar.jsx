import './NavBar.css'
import { Link } from 'react-router'

const NavBar = () => {
    return (
        <ul>
           <div id='navbar'>
            <Link to="/" >Home</Link>
            <Link to="/mailboxes">Mailboxes</Link>
            <Link to="/new-mailbox">New Mailbox</Link>
            </div>
        </ul>
    )
}
export default NavBar
