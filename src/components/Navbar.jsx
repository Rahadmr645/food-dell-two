import React, { useContext, useState } from "react";

import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import Login from "./Login";
import { StorContext } from "../context/Context";

const Navbar = () => {
  const [underline, setUnderline] = useState("home");
  const [showLog, setShowLog] = useState(false);
  const {getTotalCartAmount} = useContext(StorContext);

  return (
    <>
      {showLog && <Login setShowLog={setShowLog} />}
      <div
        style={{ height: "5vh" }}
        className=" d-flex mt-4 justify-content-between ms-2 me-2 align-items-center navbars"
      >
        <div
          style={{ width: "25%", justifyContent: "center", display: "flex" }}
        >
          <Link to="/">
            <img
              className="d-flex justify-content-center logo "
              src={assets.logo}
              alt=""
            />
          </Link>
        </div>

        <div style={{ width: "50%" }} className="nav-item">
          <ul
            style={{ fontSize: "20px" }}
            className="d-flex gap-4 justify-content-center list-unstyled"
          >
            <a
              href="/"
              className={underline === "home" ? "bborder" : ""}
              onClick={() => setUnderline("home")}
            >
              home
            </a>
            <a
              href="#menu"
              className={underline === "menu" ? "bborder" : ""}
              onClick={() => setUnderline("menu")}
            >
              menu
            </a>
            <a
              className={underline === "mobile-app" ? "bborder" : ""}
              onClick={() => setUnderline("mobile-app")}
            >
              mobile-app
            </a>
            <a
              href="#footer"
              className={underline === "contact-us" ? "bborder" : ""}
              onClick={() => setUnderline("contact-us")}
            >
              contact us
            </a>
          </ul>
        </div>

        <div
          style={{
            width: "25%",
            display: "flex",
            gap: "30px",
            justifyContent: "center",
          }}
          className="social-media-icon"
          
        >
          <img className="search" src={assets.search_icon} alt="" />
          <div
            style={{ position: "relative", cursor: "pointer" }}
            className="basket"
          >
            <Link to="/cart">
              <img className="basket-icon" src={assets.basket_icon} alt="" />
            </Link>

            <div className={getTotalCartAmount()===0?'':"dot"}></div>
          </div>
          <button
            onClick={() => setShowLog(true)}
            style={{ border: "none", borderRadius: "5px", cursor: "pointer"}}
            className="btn-sign"
          >
            sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
