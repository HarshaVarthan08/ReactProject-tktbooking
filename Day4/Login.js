import React from "react";
import { Link } from "react-router-dom";

export function Login() {

  return (
    <form>
      <h1>
        <b>LOGIN</b>
      </h1>

      <br></br>
      <label>
        <input type="text" placeholder="USER NAME/EMAIL ADDRESS" required></input>
      </label>
      <br></br>

      <label>
        
        <input type="PASSWORD" placeholder="PASSWORD"></input>
      </label>
      <br></br>
      <br></br>
      <a href="" style={{ textDecoration: "none" }}>
        FORGOT PASSWORD
      </a>

      <br></br>
      <Link to="/">
        <button >CLICK</button>
      </Link>
    </form>
  );
}
export default Login;
