

import Main from './components/Main.js';
import { Route,Routes } from 'react-router-dom';
import { Login } from './components/Login.js';
import { Signup } from './components/Signup.js';
import { Navbar } from './components/Navbar.js';
import './App.css';
import Chennai from './components/Chennai.js';
import Coimbatore from './components/Coimbatore.js';
import Townhall from './components/Townhall.js';
import Ghandhi from './components/Ghandhi.js';
import Tnagar from './components/Tnagar.js';
import Ecr from './components/Ecr.js';
import PaymentPage from './components/PaymentPage.js';
import Payment from './components/Payment.js';







function App() {
  return (
    <div className="App">
      
        <Navbar/>
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/chennai' element={<Chennai/>}/>
        <Route path='/cmb' element={<Coimbatore/>}/>
        <Route path='/townhall' element={<Townhall/>}/>
        <Route path='/gandhi' element={<Ghandhi/>}/>
        <Route path='/Tnagar' element={<Tnagar/>}/>
        <Route path='/ecr' element={<Ecr/>}/>
        <Route path='/pay' element={<Payment/>}/>
        

        
       
        
        
      </Routes> 
       

    </div>
  );
}

export default App;
