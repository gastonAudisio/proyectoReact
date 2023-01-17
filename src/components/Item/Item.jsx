import { Link } from "react-router-dom";
import React from "react";
import "./item.css";



function Item({id, title, price, detail, imgurl }) {
  const urlDetail = `/item/${id}`;
  return (
    <div className="item-card">
      <div className="item-card_header">
        <h2>{title}</h2>
        <Link to={urlDetail}></Link>
      </div>
      <div className="item-card_img">
        <img src={imgurl} alt="imagen"></img>
      </div>
      <div className="item-card_detail">
        <h4>$ {price}</h4>
        <p>{detail}</p>
        
      </div>
    </div>
  );
}

export default Item;