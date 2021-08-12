import React from "react";
import "./css/EventsPage.css";

export default function Event(props) {
  return (
    <div className="tp-item row" style={{ justifyContent: "center" }}>
      <div className="col-md-5 tp-item-image">
        <img src={props.img} alt={props.title} className="img-fluid"></img>
      </div>
      <div className="c-line">
        <div className="c-circle"></div>
      </div>
      <div className="col-md-5 tp-item-info">
        <div className="tp-item-title">{props.title}</div>
        <div className="tp-item-date tp-item-desc">
          <span>{props.date}</span> <br />
        </div>
        <div className="tp-item-desc">
          <p>{props.desc}</p>
        </div>
        <button className="register-button">Know More</button>
      </div>
    </div>
  );
}
