import './MailboxForm.css'



const MailboxForm = ({ noOfMailboxes, addBox }) => {

    const handleSumbitForm = (e) => {
        console.log(`there are currently ${noOfMailboxes} registered mailboxes`)
        e.preventDefault()
        const owner = e.target.elements.name.value
        const size = e.target.elements.size.value
        console.log ('the available elements are: ', e.target.elements)
        console.log('the owner name is ', owner)
        console.log('the selected size is ', size)
        addBox(size,owner)
    }


    return (
        <>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSumbitForm}>
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" placeholder="e.g. Paul Mikerson" />
                <label htmlFor="size">Select a size</label>
                <select id="size" name="size" defaultValue="large" >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button type="submit" >Buy Box</button>
            </form>
        </>
    )
}

export default MailboxForm