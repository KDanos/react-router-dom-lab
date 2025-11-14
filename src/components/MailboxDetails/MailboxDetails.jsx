import './MailboxDetails.css'
import { useParams } from 'react-router'


// const selectedBox = prototypejs.mailboxes.find

const MailboxDetails = ({ mailbox }) => {
    console.log(mailbox)
    const { mailboxId } = useParams()
    const { boxSize, owner, _id } = mailbox.find(box => box._id === Number(mailboxId))

    console.log(`the box is owned by ${owner} and is ${boxSize}`)
    return (
        <>
            <h1>Mailbox {_id}</h1>
            <h2>Details: </h2>
            <p>Owner: {owner}</p>
            <p>Size: {boxSize}</p>
        </>
    )
}

export default MailboxDetails