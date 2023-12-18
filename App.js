import logo from './logo.svg';

import Main from './components/Main.js';
import { Route,Routes } from 'react-router-dom';
import { Login } from './components/Login.js';
import { Signup } from './components/Signup.js';
import { Navbar } from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes> 
       

    </div>
  );
}

export default App;
