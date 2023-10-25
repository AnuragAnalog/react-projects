import React, { useState, useEffect } from "react";
import Sidebar from "/src/components/Sidebar";
import Editor from "/src/components/Editor";
import { data } from "/src/assets/data";
import Split from "react-split";
import { nanoid } from "nanoid";

function App() {
    var initNotes = () => JSON.parse(localStorage.getItem("notes")) || []

    const [notes, setNotes] = useState(initNotes)
    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || ""
    )

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        setNotes(oldNotes => {
          var newNotes = [];

          for (var i = 0; i < oldNotes.length; i++) {
            var oldNote = oldNotes[i];
            
            if (oldNote.id === currentNoteId) {
              newNotes.unshift({...oldNote, body: text})
            } else {
              newNotes.push(oldNote)
            }
          }

          return newNotes;
        })
    }

    function deleteNote(event, noteId) {
      event.stopPropagation()
      setNotes(
        oldNotes => oldNotes.filter((note) => (note.id !== noteId))
      )
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
        }
        </main>
    )
}

export default App;