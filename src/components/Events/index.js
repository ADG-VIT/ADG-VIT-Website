import React from "react";
import Event from "./Event";
import "./css/EventsPage.css";
import axios from "axios";

export default class EventsList extends React.Component {
  state = { events: [], width: 1000 };
  componentDidMount() {
    axios.get(`https://backend-events.herokuapp.com/events?q=0`).then((res) => {
      const events = res.data;
      this.setState({ events });
    });
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <div className="Events ">
        <center>
          <span class="title">Our Events</span>
        </center>
        <div className="tp-items">
          {this.state.events.map((t) => {
            return (
              <Event
                id={t._id}
                key={t._id}
                img={t.posterURL}
                width={this.state.width}
                title={t.name}
                date={t.date}
                desc={t.info}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
