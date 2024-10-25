import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StorContext } from "../context/Context";

const FoodItem = ({ id, name, price, description, image,catagory}) => {
  const [itemcCount, setItemCount] = useState(0);

  const {cartItems,addToCart,removeFromCart} = useContext(StorContext);

  return (
    <div style={{position:'relative'}} className="food-item">
      <img src={image} alt="" />
      <div style={{position:'absolute',bottom:'180px',right:'20px'}} >
        {!cartItems[id] ? (
          <img
            style={{ width: "50px",cursor:'pointer' }}
            onClick={() => addToCart(id)} 
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div
            style={{
              width: "100px",
              background: "white",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px",
            }}
            className="counter  d-flex "
          >
            <img
              style={{cursor:'pointer', width: "35px", height: "35px" }}
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />{" "}
            <p style={{ color: "darkblue" }}>{cartItems[id]}</p>
            <img
              style={{cursor:'pointer', width: "35px", height: "35px" }}
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
            />
          </div>
        )}
      </div>
      <div className="food-info">
        <div className="d-flex mt-3 mb-2 w-100 justify-content-between align-items-center name-rating">
          <p style={{ fontSize: "15px" }}>{name}</p>
          <img style={{ width: "120px" }} src={assets.rating_starts} alt="" />
        </div>
        <p className="m-0">{description}</p>
        <p style={{ color: "tomato", marginTop: "10px" }}>${price}</p>
       
      </div>
    </div>
  );
};

export default FoodItem;
