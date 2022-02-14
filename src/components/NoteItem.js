import React,{useContext} from 'react';
import noteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context
  const { note,updateNote } = props
  return <div className="col-md-4 my-3">
    <div className="card" >
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-start">
          <h5 className="card-title"><strong>{note.title}</strong>  </h5>
          <i className="fas fa-edit mx-3" onClick={()=>{updateNote(note)}}></i>
          <i className="fas fa-trash-alt"  onClick={()=>{deleteNote(note._id);props.showAlert("Deleted successfully","success")}}></i>
        </div>
        <p className="card-text">{note.description} </p>
        <div className="d-flex align-content-center flex-wrap">
        </div>
      </div>
    </div>
  </div>


    ;
};

export default NoteItem;
