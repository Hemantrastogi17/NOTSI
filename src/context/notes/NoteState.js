import React,{useState} from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "61fd005c9e8f4e2bd4dddd0c",
            "user": "61fcffa09e8f4e2bd4dddd07",
            "title": "Higrfgerge",
            "description": "Helli",
            "tag": "imp",
            "date": "2022-02-04T10:30:52.494Z",
            "__v": 0
        },
        {
            "_id": "61fd145aaa0734cb1208742c",
            "user": "61fcffa09e8f4e2bd4dddd07",
            "title": "This is note 2",
            "description": "Welcome to my app",
            "tag": "personal",
            "date": "2022-02-04T11:56:10.598Z",
            "__v": 0
        },
        {
            "_id": "61fd145aaa0734cb1208742c1",
            "user": "61fcffa09e8f4e2bd4dddd07",
            "title": "This is note 2",
            "description": "Welcome to my app",
            "tag": "personal",
            "date": "2022-02-04T11:56:10.598Z",
            "__v": 0
        },
        {
            "_id": "61fd145aaa0734cb1208742c2",
            "user": "61fcffa09e8f4e2bd4dddd07",
            "title": "This is note 2",
            "description": "Welcome to my app",
            "tag": "personal",
            "date": "2022-02-04T11:56:10.598Z",
            "__v": 0
        },
        {
            "_id": "61fd145aaa0734cb1208742c3",
            "user": "61fcffa09e8f4e2bd4dddd07",
            "title": "This is note 2",
            "description": "Welcome to my app",
            "tag": "personal",
            "date": "2022-02-04T11:56:10.598Z",
            "__v": 0
        },
        {
            "_id": "61fd145aaa0734cb1208742c4",
            "user": "61fcffa09e8f4e2bd4dddd07",
            "title": "This is note 2",
            "description": "Welcome to my app",
            "tag": "personal",
            "date": "2022-02-04T11:56:10.598Z",
            "__v": 0
        }
        
        
    ]
    const [notes, setNotes] = useState(notesInitial);

    // Add a note
    const addNote = (title,description,tag)=>{
        
    }
    //  Delete a note
    const deleteNote = (id)=>{
        
    }
    // Edit a note
    const editNote = (id)=>{
        
    }
    return (
        <NoteContext.Provider value={{notes, addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState