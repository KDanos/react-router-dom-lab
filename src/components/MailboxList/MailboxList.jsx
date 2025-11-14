import './MailboxList.css'
import { Link } from 'react-router'

const MailboxList = ({ mailbox }) => {

    console.log(`The current mailboxes are ${mailbox.length}`)

    return (
        <div>
            {mailbox.length == 0 ? (

                <h1>No mailboxes have yet been bought</h1>
            ) : (
                <>
                    <h1>Mailbox List</h1>
                    <div id="mailbox-list">
                    {mailbox.map(box => (
                        <Link key={box._id} to={`/mailboxes/${box._id}`}>Mailbox {box._id}</Link>
                    ))}
                    </div>
                </>

            )}
        </div>
    )
}
export default MailboxList