import React from 'react';
import { Link } from 'react-router-dom';
export function Signup(){
    return(
        <form>
            <h1><b>SIGN UP</b></h1>
            <b>
                <label>
                    <h4>FIRST NAME : </h4>
                    <input type="text"></input>
                </label>
            
                <label>
                    <h4>LAST NAME : </h4>
                    <input type="text"></input>
                </label>
            
               
               
                <label>
                    <h4>EMAIL ADDRESS : </h4>
                    <input type="text"></input>
                </label>
                
                
                <label>
                    <h4>SET PASSWORD : </h4>
                    <input type="PASSWORD"></input>
                </label>
                <label>
                    <h4>RE-ENTER PASSWORD : </h4>
                    <input type="PASSWORD"></input>
                </label>
                <br></br>
                <br></br>
               <Link to='/login'><button>CLICK</button></Link>
            </b>
        </form>
    );
}
export default Signup;