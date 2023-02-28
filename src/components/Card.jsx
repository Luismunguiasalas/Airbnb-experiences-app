import React from "react";

function Card(props) {
  let badgeText;

  if (props.item.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.item.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}

      <img src={`/${props.item.coverImg}`} alt="" className="card--img" />
      <div className="card--stats">
        <img src="/start.png" alt="" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount}) • </span>
        <span className="grey">({props.item.location})</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">{props.item.price}</span>
      </p>
    </div>
  );
}

export default Card;
