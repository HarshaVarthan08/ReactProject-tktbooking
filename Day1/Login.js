import React from 'react';
function Login(){
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
            <a href="">FORGOT PASSWORD</a>
            
            <br></br>
            <button value="">CLICK</button>
        </form>
    );
}
export default Login;