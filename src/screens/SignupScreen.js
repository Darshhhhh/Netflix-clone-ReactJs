import React, { useRef } from "react";
import { auth } from "../firebase";
import "./Signupscreen.css";
import { useHistory } from "react-router-dom";
import Homescreen from "./Homescreen";

function SignupScreen() {
  const history = useHistory();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const routeChange = () => {
    let path = `newPath`;
    history.push(Homescreen);
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
    <Homescreen />;
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="SignupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type={"email"} />
        <input ref={passwordRef} placeholder="Password" type={"password"} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="SignupScreen_gray">New to Netflix? </span>
          <span className="SignupScreen_link" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
