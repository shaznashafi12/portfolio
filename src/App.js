import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './port/Mainpage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='//' element={<Mainpage/>}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
