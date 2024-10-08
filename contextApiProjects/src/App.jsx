
import './App.css'
import NoteState from './context/noteState'
import NoteContext from './context/noteContext'
import { useContext } from 'react'
function App() {
  return (
    <>
    <NoteState>
      <MainComponent />

    </NoteState>
    </>
  )
}

function MainComponent() {
  let a = useContext(NoteContext)
  return(
    <h1>My name is {a.name}</h1>
  )
  
}

export default App