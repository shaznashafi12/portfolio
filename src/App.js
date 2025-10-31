// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './port/Home';
import About from './port/About';
import Project from './port/Project';
import Mainpage from './port/Mainpage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='//' element={<Mainpage/>}></Route>
      {/* <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
          <Route path='/project' element={<Project/>}></Route> */}


        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
