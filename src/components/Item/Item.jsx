import { Link } from "react-router-dom";
import React from "react";
import "./item.css";



function Item({id, title, price, detail, imgurl, stock }) {
  const urlDetail = `/item/${id}`;
  return (
    <div className="item-card">
      <Link to={urlDetail}>
        <div className="item-card_img">
          <img src={imgurl} alt="imagen"></img>
        </div>
      </Link>
      <div className="item-card_detail">
        <h3>{title}</h3>
        <h5>$ {price}</h5>
        <h5> {stock} unidades</h5>
        <small>{detail}</small>
        <br />
        <Link to={urlDetail}>
       <button className="btn">detalles</button>
       </Link>
      </div>
      
    </div>
  );
}

export default Item;