import React from "react";
import "./style.css";
import Modal from "../Modal";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

export default function EventPhone({handler, ...props}) {
  const convertTime = (time) => {
    var a = new Date(time * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    return date + " " + month + " " + year;
  };
  return (
    <TimelineItem className="timeline-item">
      <TimelineSeparator>
        <TimelineDot
          style={{
            borderColor: "var(--blue)",
            borderWidth: 5,
            width: 10,
            height: 10,
            margin: 0,
          }}
          variant="outlined"
        />
        <TimelineConnector
          style={{
            backgroundColor: "var(--blue)",
            width: 5,
          }}
        />
      </TimelineSeparator>
      <TimelineContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "2rem",
          marginBottom: "5rem"
        }}
      >
        <img
          src={props.img}
          alt={props.title}
          className="event-image-phone"
        ></img>
        <div className="event-description-wrap">
          <div className="event-title">{props.title}</div>
          <div className="event-date">
            <span>{convertTime(props.date)}</span> <br />
          </div>
          <div className="event-desc">{props.desc}</div>
          <Modal id={props.id} disable={props.disable} handler={handler}></Modal>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}
