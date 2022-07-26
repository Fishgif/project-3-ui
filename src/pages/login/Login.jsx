import {useRef } from "react";
import { useContext } from "react";
import "./login.css"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";



export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user)
    return (
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">HUDDLE</h3>
            <span className="loginDesc">
              Making the world a smaller place 
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" on onSubmit={handleClick}>
              <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
              <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password}/>
              <button className="loginButton">{isFetching ? "loading" : "Log In"}
              
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              
              
                Create a New Account
            
            </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  
