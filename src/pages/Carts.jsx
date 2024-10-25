import React, { useContext } from "react";

import { StorContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Carts = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StorContext);

  const navigate = useNavigate();

  return (
    <div style={{height:"65vh"}} className="carts container ">
      <div className="cart-items mt-4">
        <div className="cart-items-titles ">
          <b>Items</b>
          <b>Title</b>
          <b>Price</b>
          <b>Quantity</b>
          <b>Total</b>
          <b>Remove</b>
        </div>

        <hr className="spacial" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-titles">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    style={{ cursor: "pointer" }}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div style={{marginTop:'200px'}} className="cart-bottom d-flex justify-content-between">
        <div style={{ width: "70%" }} className="cart-total">
          <h1>Totals</h1>

          <div>
            <div className="cart-totals-details d-flex justify-content-between p-2">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />
            <div className="cart-totals-details  d-flex justify-content-between p-2">
              <p>Delevary fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-totals-details  d-flex justify-content-between p-2">
              <b>Total</b>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
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
                }}
                onClick={() => navigate('/order')}
              >
                Proceed to Chackout
              </button>
            </div>
          </div>
        </div>
        <div style={{ width: "25%" }} className="cart-promocode ">
          <div className="d-flex flex-column gap-2">
            <p   className="cart-p " >If you have a promocode Enter here</p>
            <div className="promocode-input d-flex ">
              <input
                style={{
                  border: "none",
                  padding: "5px",
                  borderRadius: "5px 0px 0px 5px",
                }}
                type="text"
                placeholder="Promocode"
              />
              <button
                style={{
                  width: "200px",
                  border: "none",
                  borderRadius: "0px 5px 5px 0px",
                  backgroundColor: "black",
                  color: "white",
                  padding: "5px",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
