import { useState } from 'react'
import logo from './assets/Logo-nextLevelWeek.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'



export function App() {

  const  [notes, setNotes] = useState([
    { id: 1, date: new Date (), content: 'Hello Criatura' }
  ])
 return (

  <div className="mx-auto max-w-6xl my-12 space-y-6">
  <img src={logo} alt="NextLevelWeek" />
  
  <form className="w-full">
  <input type="text"
   placeholder='Busque em suas notas...'
   className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500" />
  </form>

  <div className="h-px bg-slate-700" />

  <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">

    <NewNoteCard />
    <NoteCard note={{
      date: new Date(1994, 1, 26),
      content: 'Hello Criatura'
    }} />

  </div>

  </div>
 


  
 )
}


