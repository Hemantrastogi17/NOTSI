import React, { useState, useContext } from 'react';
import noteContext from '../context/notes/NoteContext';


const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const handleAddNote = (e) => {
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Note added successfully","success")

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return <div className="container my-4">
        <h1>Add a note</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <textarea type="text" onChange={onChange} className="form-control" value={note.title} id="title" name="title" rows="1"  minLength={5} required  />

            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label> 
                <textarea type="text" id="description" name="description" value={note.description} onChange={onChange} className="form-control" rows="6"  minLength={5} required />
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <textarea type="text" id="tag" name="tag" value={note.tag} onChange={onChange} className="form-control" rows="1" />
            </div>
            <button type="submit" disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
        </form>
    </div>;
};

export default AddNote;
