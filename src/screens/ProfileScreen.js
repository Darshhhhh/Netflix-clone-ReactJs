import React, { useState } from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [CurrentPlan, setPlan] = useState("Premium");
  const Plan = [
    {
      PlanLabel: "Mobile",
      Price: "₹149",
      quality: "480p",
      Devices: ["Phone", "Tablet"],
    },
    {
      PlanLabel: "Basic",
      Price: "₹199",
      quality: "720p",
      Devices: ["Phone", "Tablet", "Computer", "TV"],
    },
    {
      PlanLabel: "Standard",
      Price: "₹499",
      quality: "1080p",
      Devices: ["Phone", "Tablet", "Computer", "TV"],
    },
    {
      PlanLabel: "Premium",
      Price: "₹649",
      quality: "4K+HDR",
      Devices: ["Phone", "Tablet", "Computer", "TV"],
    },
  ];
  return (
    <div className="ProfileScreen">
      <Nav />
      <div className="ProfileScreen_body">
        <h1 className="text-center mb-5">Your Profile</h1>

        <img
          src="https://noirflix.netlify.app/imgs/icon1.png"
          alt="profile_img"
          style={{
            alignSelf: "center",
            marginBottom: "20px",
            borderRadius: "10px",
            height: "130px",
          }}
        />
        <div className="ProfileScreen_info">
          <div className="ProfileScreen_details text-center">
            <h2>{user.email}</h2>
            {/* <div className="ProfileScreen_plans">
              <h3 id="plan_head">Plans(current plan : Premium )</h3>
              <h3 id="plan_details">
                Mobile
                <span id="plan_price">
                  <button>450</button>
                </span>
              </h3>
              <h3 id="plan_details">
                720p
                <span id="plan_price">
                  <button>450</button>
                </span>
              </h3>
              <h3 id="plan_details">
                1080p
                <span id="plan_price">
                  <button>450</button>
                </span>
              </h3>
              <h3 id="plan_details">
                4K
                <span id="plan_price">
                  <button>450</button>
                </span>
              </h3>
              <button
                onClick={() => auth.signOut()}
                className="ProfileScreen_signOut"
              >
                Sign Out
              </button>
            </div> */}
            <div>
              <h4>Current Plan: {CurrentPlan}</h4>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          {Plan?.map((value, index) => {
            return (
              <>
                <div className="col-md-3" key={index}>
                  <div className="text-center">
                    <h5>
                      {value?.PlanLabel}
                      <span>({value?.quality})</span>
                    </h5>
                    <button
                      className="price_Btn my-3"
                      onClick={() => [
                        setPlan(value?.PlanLabel),
                        alert("Plan Changed to " + value?.PlanLabel),
                      ]}
                    >
                      {value?.Price}
                    </button>
                  </div>
                  <ul className="Allowed_Device">
                    {value.Devices?.map((v, subIndex) => {
                      return (
                        <>
                          <li key={subIndex}>{v}</li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
          <div className="text-center">
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
  );
}

export default ProfileScreen;
