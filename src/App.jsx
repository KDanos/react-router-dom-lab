
import { Route, Routes } from 'react-router'
import { useState } from 'react'

//Components
import Navbar from "./components/NavBar/NavBar.jsx";
import MailboxList from './components/MailboxList/MailboxList.jsx';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';



const App = () => {

  //State variables
  const [mailbox, setMailbox] = useState([])

  //Event handles
  const addBox = (size, owner) => {
    const newMailbox = {
      _id: noOfMailboxes + 1,
      boxSize: size,
      owner: owner,
    }
    setMailbox([...mailbox, newMailbox])
  }

  //Static Variables
  const noOfMailboxes = mailbox.length

  return (
    <>
      {console.log('The current mailboxes are: ', mailbox)}
      <Navbar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList
          mailbox={mailbox}
        />} />
        <Route path='/new-mailbox' element={<MailboxForm
          noOfMailboxes={noOfMailboxes}
          addBox={addBox}
        />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails
        mailbox = {mailbox}
        />} />
      </Routes>

    </>
  )
}

export default App;