import React, { useContext } from "react";
import { StorContext } from "../context/Context";
import FoodItem from "./FoodItem";

const FoodList = ({ catagory }) => {
  const { food_list } = useContext(StorContext);
  return (
    <div className="food-section ms-5 me-5">
      <h2 style={{ marginTop: "30px" }}>Top Dishes Near You</h2>
      <div className="foodDisplay">
        {food_list.map((item, index) => {
          if (catagory === "All" || catagory === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodList;
