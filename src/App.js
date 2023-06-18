import Create from './components/Create';
import './App.css';
import './components/Create.js';
import Read from './components/Read';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Create/>}></Route>
    <Route path='/read' element={<Read/>}></Route>
    <Route path='/update' element={<Update/>}></Route>    

     {/* <Create/>  */}
     </Routes>
     </BrowserRouter>
     </div>
  
  )
}

export default App;
