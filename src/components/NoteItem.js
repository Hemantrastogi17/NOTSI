import React from 'react';

const NoteItem = (props) => {
  const { note } = props
  return <div className="col-md-4 my-3">
    <div className="card" >
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-start">
          <h5 className="card-title"><strong>{note.title}</strong>  </h5>
          <i className="fas fa-edit mx-3"></i>
          <i className="fas fa-trash-alt "></i>
        </div>
        <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, commodi. Nulla libero nemo deleniti unde, in velit sint vitae obcaecati dicta error expedita, blanditiis tempore quas quos optio nam. Velit!</p>
        <div className="d-flex align-content-center flex-wrap">
        </div>
      </div>
    </div>
  </div>


    ;
};

export default NoteItem;
