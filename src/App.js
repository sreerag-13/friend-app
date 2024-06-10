import logo from './logo.svg';
import './App.css';
import AddFr from './components/AddFr';
import ViewFr from './components/ViewFr';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddFr/>}/>
    <Route path='/ViewFr' element={<ViewFr/>}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
