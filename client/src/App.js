// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import JobPost from './components/JobPost';
import EditPost from './components/EditPost'
import {useState} from 'react'

function App() {

  const[jobs, setJobs] = useState([])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setJobs={setJobs}/>} />
          <Route path="/create" element={<JobPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
