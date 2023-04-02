import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import { useHistory } from "react-router-dom";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const history = useHistory();
  return (
    <div className="LoginScreen">
      <div className="LoginScreen_background">
        <img
          className="LoginScreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          onClick={() => {
            setSignIn(true);
            history.push("/");
          }}
          className="LoginScreen_button"
        >
          Sign In
        </button>

        <div className="LoginScreen_gradient" />
      </div>
      <div className="LoginScreen_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films,TV programmes and more...</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your  
              membership
            </h3>

            <div className="LoginScreen_input">
              <form>
                <input type={"email"} placeholder="Email Address"></input>
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
