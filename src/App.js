import './App.css';
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="I am good"/>
          <div className="container">
            {/* <Home /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/user" element={<User />}/> */}
              {/* <Route path="/notes" element={<Notes />}/> */}
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
