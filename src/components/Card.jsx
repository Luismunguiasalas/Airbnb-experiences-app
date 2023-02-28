import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={`/${props.img}`} alt="" className="card--img" />
      <div className="card--stats">
        <img src="/start.png" alt="" className="card--star" />
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) • </span>
        <span className="grey">({props.location})</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">{props.price}</span>
      </p>
    </div>
  );
}

export default Card;
