import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./SignIn.css";
import { auth } from "../FireBase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignIn() {
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    
   // var a= createUserWithEmailAndPassword(auth, email, pass)

    createUserWithEmailAndPassword(auth, email, pass)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
          alert("Log-In Successfull")
        }
      })
      .catch((error) => alert(error.message));
  };

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");
  return (
    <div className="sign_in_page">
      <Link to="/">
        <img
          className="amazon_logo"
          src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.wtvq.com/content/uploads/2020/02/y/w/Amazon.jpg"
        ></img>
      </Link>
      <div className="log_in">
        <p className="sign_in_heading">Sign-In</p>
        <form className="email_input">
          <label>Email or mobile phone number</label>
          <input
            className="email_input_box"
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label>Password</label>
          <input
            className="email_input_box"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          ></input>

          <button type="submit" onClick={signin}>
            Sign-In
          </button>
        </form>
        <p className="login_warn">
          By continuing, you agree to Amazon's{" "}
          <a href="#">Conditions of Use </a> and{" "}
          <a href="#"> Privacy Notice.</a>
        </p>
        <details>
          <summary>Need help?</summary>
          <span>Forgot Password</span>
          <br></br>
          <span>Other issues with Sign-In</span>
        </details>
      </div>
      <div className="new_border">
        <p>New to Amazon?</p>
      </div>
      <button className="btn" onClick={register}>
        Create your Amazon account
      </button>
    </div>
  );
}

export default SignIn;
