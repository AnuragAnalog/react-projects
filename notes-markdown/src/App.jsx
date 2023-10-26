import React, { useState, useEffect } from "react";
import Split from "react-split";
import { nanoid } from "nanoid";
import { onSnapshot, addDoc, doc, deleteDoc } from "firebase/firestore";

import Sidebar from "/src/components/Sidebar";
import Editor from "/src/components/Editor";
import { notesCollection, db } from "../firebase";

function App() {
    var initNotes = []

    const [notes, setNotes] = useState(initNotes)
    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || ""
    )

    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]

    useEffect(() => {
        // localStorage.setItem("notes", JSON.stringify(notes));
        const unsubscribe = onSnapshot(notesCollection, function(snapshot) {
            // Sync the changes from the firestore database
            const firebaseArr = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })
            setNotes(firebaseArr)
        })

        return unsubscribe
    }, [])
    
    async function createNewNote() {
        const newNote = {
            // id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        const newNoteRef = await addDoc(notesCollection, newNote)
        // setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        setNotes(oldNotes => {
          var newNotes = [];

          for (var i = 0; i < oldNotes.length; i++) {
            var oldNote = oldNotes[i]
            
            if (oldNote.id === currentNoteId) {
              newNotes.unshift({...oldNote, body: text})
            } else {
              newNotes.push(oldNote)
            }
          }

          return newNotes
        })
    }

    async function deleteNote(noteId) {
        const docRef = doc(db, "notes", noteId)
        await deleteDoc(docRef)
    }
    
    function findCurrentNote() {
        return 
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
                    currentNote={currentNote}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={currentNote} 
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