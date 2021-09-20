import React from "react";
import "./style.css";
import Modal from "../Modal";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

export default function Event(props) {
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

  if (props.index % 2 === 0)
    return (
      <TimelineItem>
        <TimelineOppositeContent>
          <img src={props.img} alt={props.title} className="event-image"></img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            style={{
              backgroundColor: "var(--blue)",
              width: 5,
            }}
          />
          <TimelineDot
            style={{
              borderColor: "var(--blue)",
              borderWidth: 5,
              width: 10,
              height: 10,
              margin: 0
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
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div className="event-description-wrap">
            <div className="event-title">{props.title}</div>
            <div className="event-date">
              <span>{convertTime(props.date)}</span> <br />
            </div>
            <div className="event-desc">{props.desc}</div>
            <Modal id={props.id}></Modal>
          </div>
        </TimelineContent>
      </TimelineItem>
    );
  else
    return (
      <TimelineItem>
        <TimelineOppositeContent>
          <img src={props.img} alt={props.title} className="event-image"></img>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            style={{
              backgroundColor: "var(--blue)",
              width: 5,
            }}
          />
          <TimelineDot
            style={{
              borderColor: "var(--blue)",
              borderWidth: 5,
              width: 10,
              height: 10,
              margin: 0
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
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div className="event-description-wrap">
            <div className="event-title">{props.title}</div>
            <div className="event-date">
              <span>{convertTime(props.date)}</span> <br />
            </div>
            <div className="event-desc">{props.desc}</div>
            <Modal id={props.id}></Modal>
          </div>
        </TimelineContent>
      </TimelineItem>
    );
}
