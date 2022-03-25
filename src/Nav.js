import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./Nav.css";

function Nav() {
  const history = useHistory();
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.screenY > 1000) handleShow(true);
    else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        ></img>

        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://noirflix.netlify.app/imgs/icon1.png"
          //   src="https://www.ottawamillhouse.com/wp-content/uploads/2017/05/1.png"
          alt="avtar logo"
        ></img>
      </div>
    </div>
  );
}

export default Nav;
