// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import JobPost from './components/JobPost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/create" element = {<JobPost/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
