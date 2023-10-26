import React, { useState, useEffect } from "react";
import Split from "react-split";
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";

import Sidebar from "/src/components/Sidebar";
import Editor from "/src/components/Editor";
import { notesCollection, db } from "../firebase";

function App() {
    var initNotes = []

    const [notes, setNotes] = useState(initNotes)
    const [currentNoteId, setCurrentNoteId] = useState("")

    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]

    useEffect(() => {
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

    useEffect(() => {
        if (!currentNoteId) {
            setCurrentNoteId(notes[0]?.id)
        }
    }, [notes])
    
    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now()
        }

        await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNote.id)
    }
    
    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId)
        await setDoc(docRef, { body: text, updatedAt: Date.now() }, { merge: true })
    }

    async function deleteNote(noteId) {
        const docRef = doc(db, "notes", noteId)
        await deleteDoc(docRef)
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
                <Editor 
                    currentNote={currentNote} 
                    updateNote={updateNote} 
                />
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