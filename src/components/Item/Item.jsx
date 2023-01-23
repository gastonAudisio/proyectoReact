import { Link } from "react-router-dom";
import React from "react";
import "./item.css";



function Item({id, title, price, detail, imgurl }) {
  const urlDetail = `/item/${id}`;
  return (
    <div className="item-card">
      <Link to={urlDetail}>
        <div className="item-card_img">
          <img src={imgurl} alt="imagen"></img>
        </div>
      </Link>
      <div className="item-card_detail">
        <h4>$ {price}</h4>
        <small>{detail}</small>
      </div>
      
    </div>
  );
}

export default Item;