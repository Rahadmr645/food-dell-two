import React from "react";

import { menu_list } from "../assets/assets";

const ExploreMenu = ({ catagory, setCatagory }) => {
  return (
    <div className=" explore-menu ms-5 me-5 mt-4" id="menu">
      <div className="menu-info">
        <h3>Explore our menu</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
          pariatur illo velit cum. Nobis repellendus hic sequi repudiandae! Aut
          ad accusamus amet quod illum veniam maiores suscipit, esse culpa in.
        </p>
      </div>
      <div className="menu d-flex">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCatagory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              
              key={index}
              className="menu-item"
            >
              <img
                className={catagory === item.menu_name ? "round" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
