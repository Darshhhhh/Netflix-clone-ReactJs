import React, { useEffect } from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/counter/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //log in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //log out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <Homescreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
