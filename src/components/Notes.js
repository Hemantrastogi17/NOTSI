import React, { useContext, useEffect, useRef,useState } from 'react';
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes,editNote } = context;
    const navigate = useNavigate()
    useEffect(() => { 
        if(localStorage.getItem('token')){
            getNotes()
        }
        else{
            navigate("/login")
        }
        // eslint-disable-next-line
    }, []);

    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" });
    
    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description,etag:currentNote.tag})
    }

    const handleClick = (e) => {
        console.log("updateing");
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
        props.showAlert("Note updated successfully","success")

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return <>
        <AddNote showAlert= {props.showAlert} />
        <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="e   title" className="form-label">Title</label>
                                <textarea type="text" onChange={onChange} value={note.etitle} className="form-control" id="etitle" name="etitle" rows="1"  minLength={5} required />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="edescription" className="form-label">Description</label>
                                <textarea type="text" id="edescription" value={note.edescription} name="edescription" onChange={onChange} className="form-control" rows="6"  minLength={5} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="etag" className="form-label">Tag</label>
                                <textarea type="text" id="etag" name="etag" value={note.etag} onChange={onChange} className="form-control" rows="1" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row my-3">
            <h1>Your notes</h1>
            <div className="container">
            {notes.length===0 && "No notes to display"}
            </div>
            {notes.map((note) => {
                return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
            })}
        </div>
    </>;
};

export default Notes;
