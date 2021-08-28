import React from "react";
import Event from "./Event";
import "./style.css";
import axios from "axios";
import Timeline from "@material-ui/lab/Timeline";
import EventPhone from "./EventPhone";

export default class EventsList extends React.Component {
  state = { events: [], width: 1000 };
  componentDidMount() {
    axios.get(`https://backend-events.herokuapp.com/events?q=0`).then((res) => {
      const events = res.data;
      // console.log(events);
      this.setState({ events });
    });
    this.setState({ width: window.innerWidth });
  }

  render() {
    if (window.innerWidth > 768) {
      return (
        <div className="Events">
          <center>
            <span class="title">Our Events</span>
            <hr className="horiontal-line" />
          </center>
          <Timeline align="alternate">
            {this.state.events.map((t, index) => {
              return (
                <Event
                  id={t._id}
                  key={t._id}
                  img={t.posterURL}
                  width={this.state.width}
                  title={t.name}
                  date={t.date}
                  desc={t.info}
                  index={index}
                />
              );
            })}
          </Timeline>
        </div>
      );
    } else {
      return (
        <div className="Events">
          <center>
            <span class="title">Our Events</span>
            <hr className="horiontal-line" />
          </center>
          <Timeline>
            {this.state.events.map((t, index) => {
              return (
                <EventPhone
                  id={t._id}
                  key={t._id}
                  img={t.posterURL}
                  width={this.state.width}
                  title={t.name}
                  date={t.date}
                  desc={t.info}
                  index={index}
                />
              );
            })}
          </Timeline>
        </div>
      );
    }
  }
}
