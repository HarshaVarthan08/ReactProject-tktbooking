import React from 'react';
import { Link } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
export function Login(){
  const notify=()=>{
    toast("Login Sucessfull");
  }
    return(
        <form>
            <h1><b>LOGIN</b></h1>
            
           
            <br></br>
            <label>
                <h4>USER NAME/EMAIL ADDRESS : </h4>
                <input type="text"></input>
            </label>
            <br></br>
            
            <label>
                <h4>PASSWORD : </h4>
                <input type="PASSWORD"></input>
            </label>
            <br></br>
            <br></br>
            <a href="" style={{textDecoration:'none'}}>FORGOT PASSWORD</a>
            
            <br></br>
            <Link to='/'><button onClick={notify}>CLICK</button></Link>
            
        </form>
    );
}
export default Login;