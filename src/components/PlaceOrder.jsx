import React, { useContext } from "react";
import { StorContext } from "../context/Context";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StorContext);
  return (
    <form
      style={{ marginLeft: "150px", height: "60vh", alignItems: "center" }}
      className="placeorder d-flex justify-content-between   mt-5"
    >
      <div style={{ width: "30%" }} className="place-order-left  ">
        <p
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: "25px",
            marginBottom: "20px",
          }}
          className="title"
        >
          Delivery Information
        </p>
        <div className="multi-fields w-100">
          <input
            style={{ width: "50%" }}
            type="text"
            placeholder="First name"
          />
          <input style={{ width: "50%" }} type="text" placeholder="Last name" />
        </div>

        <input
          style={{ width: "100%", marginTop: "10px" }}
          type="email"
          placeholder="Email address"
        />
        <input
          style={{ width: "100%", marginTop: "10px" }}
          type="text"
          placeholder="Street"
        />

        <div style={{ marginTop: "10px" }} className="multi-fields w-100">
          <input style={{ width: "50%" }} type="text" placeholder="City" />
          <input style={{ width: "50%" }} type="text" placeholder="State" />
        </div>
        <div style={{ marginTop: "10px" }} className="multi-fields w-100 ">
          <input style={{ width: "50%" }} type="text" placeholder="Zip code" />
          <input style={{ width: "50%" }} type="text" placeholder="Country" />
        </div>
        <input
          style={{ width: "100%", marginTop: "10px" }}
          type="number"
          placeholder="Phone"
        />
      </div>
      <div
        style={{ width: "30%", marginRight: "300px" }}
        className="palce-order-right"
      >
        <div style={{ width: "100%" }} className="cart-total">
          <h1>Totals</h1>

          <div className="cart-totals-details d-flex justify-content-between p-2">
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>

          <hr />
          <div className="cart-totals-details  d-flex justify-content-between p-2">
            <p>Delevary fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-totals-details  d-flex justify-content-between p-2">
            <b>Total</b>
            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>
          <div style={{}} className="button d-flex ">
            <button
              style={{
                border: "none",
                borderRadius: "5px",
                padding: "5px",
                background: "tomato",
                color: "white",
                display: "flex",
                justifyContent: "center",
                width: "300px",
                marginTop: "20px",
              }}
              onClick={() => navigate("/order")}
            >
              Proceed to PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
