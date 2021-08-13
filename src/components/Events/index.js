import React from "react";
import Event from "./Event";
import axios from "axios";

export default class EventsList extends React.Component {
  state = { events: [] };
  componentDidMount() {
    axios.get(`https://backend-events.herokuapp.com/events?q=0`).then((res) => {
      const events = res.data;
      this.setState({ events });
    });
  }
  render() {
    return (
      <div className="Events ">
        <div className="tp-title">Our Events</div>
        <div className="tp-items">
          {this.state.events.map((t) => {
            return (
              <Event
                key={t._id}
                img={t.posterURL}
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
