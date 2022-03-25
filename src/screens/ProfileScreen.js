import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="ProfileScreen">
      <Nav />
      <div className="ProfileScreen_body">
        <h1>Edit Profile</h1>
        <div className="ProfileScreen_info">
          <img
            src="https://noirflix.netlify.app/imgs/icon1.png"
            alt="profile_img"
          />
          <div className="ProfileScreen_details">
            <h2>{user.email}</h2>
            <div className="ProfileScreen_plans">
              <h3>Plans(current plan : )</h3>
              <p></p>
              <button
                onClick={() => auth.signOut()}
                className="ProfileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
