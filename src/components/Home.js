import React, { useContext } from 'react';

import Notes from "./Notes"
const Home = () => {
  
  return <div>
    <div className="container my-4">
      <h1>Add a note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <textarea type="password" className="form-control" rows="1" id="exampleInputPassword1" />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <textarea type="password" className="form-control" rows="6" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    <Notes/>
  </div>;
};

export default Home;
