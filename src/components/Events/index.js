import React from "react";
import Event from "./Event";
import axios from "axios";

export default function Events(props) {
  const [isUpdated, setIsUpdated] = React.useState({value: false, data: null});
  React.useEffect(() => {
    axios.get(`https://backend-events.herokuapp.com/events?q=0`).then((res) => {
      setIsUpdated({value: true, data: res.data});
    });
  }, [])
  return (
    <div className="Events ">
      <div className="tp-title">Our Events</div>
      <div className="tp-items">
        {isUpdated.value && isUpdated.data.map((t) => {
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
