import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = ({ setShowLog }) => {
  const [currentstat, setCurrentStat] = useState("Signup");
  const [isChecked, setIsChecked] = useState(false);

  const handleChackBox = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div
      style={{
        position: "absolute",
        zIndex: "1",
      
        width: "95%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.5)",
      }}
      className="mt-2"
    >
      <div
        style={{
        
          width: "500px",
          height: "500px",
          backgroundColor: "white",
          color: "black",
          borderRadius: "10px",
          padding: "20px",
        }}
        className="login-container d-flex flex-column gap-3"
      >
        <div className="login-header d-flex  justify-content-between m-2">
          <h1 style={{ fontSize: "20px", color: "black" }}>{currentstat}</h1>

          <img
            onClick={() => setShowLog(false)}
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-details">
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "center",
            }}
          >
            {currentstat === "Signup" ? (
              <div
                style={{ alignItems: "flex-start" }}
                className="username  w-100 d-flex gap-3  "
              >
                <label style={{ padding: "9px" }} htmlFor="username">
                  UserName
                </label>
                <input
                  style={{ width: "100%", padding: "10px" }}
                  id="username"
                  type="text"
                  placeholder="Enter your userName"
                />
              </div>
            ) : (
              <></>
            )}

            <div
              style={{ alignItems: "flex-start" }}
              className=" w-100 email d-flex  gap-3"
            >
              <label style={{ padding: "10px" }} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                style={{ width: "100%", marginLeft: "31px", padding: "10px" }}
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className=" password d-flex gap-3 w-100">
              <label style={{ padding: "10px" }} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                style={{ width: "100%", padding: "10px" }}
                type="password"
                placeholder="set your password"
              />
            </div>
          </form>
          <div
            style={{ justifyContent: "center" }}
            className="largbutton mt-3 d-flex"
          >
            <button
              style={{
                width: "80%",
                padding: "10px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: isChecked ? "tomato" : "gray",
                cursor: isChecked ? "pointer" : "not-allowed",
              }}
              disabled={!isChecked}
            >
              Craete account
            </button>
          </div>
          <div className="chackbox d-flex gap-2 mt-2 ms-3">
            <input
              style={{ cursor: "pointer" }}
              id="chackbox"
              type="checkbox"
              onChange={handleChackBox}
            />
            <p>Are you are agree with our policy?</p>
          </div>

          {currentstat === "Signup" ? (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              Already have the accoutn?
              <span
                onClick={() => setCurrentStat("Login")}
                style={{ color: "tomato", cursor: "pointer" }}
              >
                Login here
              </span>
            </p>
          ) : (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              Don't have any account
              <span
                onClick={() => setCurrentStat("Signup")}
                style={{ color: "tomato", cursor: "pointer" }}
              >
                Crate an account?
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
