import React from 'react';
import { Link } from 'react-router-dom';
export function Signup(){
    return(
        <form>
            <h1><b>SIGN UP</b></h1>
            <b>
                <label>
                    
                    <input type="text" placeholder='FIRST NAME'></input>
                </label>
                <br></br>
            
                <label>
                    
                    <input type="text" placeholder='LAST NAME' ></input>
                </label>
                <br></br>
                <label>
                    <input type="text" placeholder='EMAIL ADDRESS'></input>
                </label>
                
                <br></br>
                <label>
                    
                    <input type="PASSWORD" placeholder='SET PASSWORD'></input>
                </label>
                <br></br>
                <label>
                    
                    <input type="PASSWORD" placeholder='RE-ENTER PASSWORD'></input>
                </label>
                <br></br>
                <br></br>
               <Link to='/login'><button>CLICK</button></Link>
            </b>
        </form>
    );
}
export default Signup;