import React, {useState, useEffect} from "react";
import Event from "./Event";
import "./style.css";
import axios from "axios";
import Timeline from "@material-ui/lab/Timeline";
import EventPhone from "./EventPhone";
import { useDispatch, useSelector } from "react-redux";
import { setEvent } from "../../store/Event";
import {Spinner, SpinnerBox} from "../../containers/spinner"

// export default class EventsList extends React.Component {
//   state = { events: [], width: 1000 };
//   componentDidMount() {
//     axios.get(`https://backend-events.herokuapp.com/events?q=0`).then((res) => {
//       const events = res.data;
//       // console.log(events);
//       this.setState({ events });
//     });
//     this.setState({ width: window.innerWidth });
//   }

//   render() {
//     if (window.innerWidth > 768) {
//       return (
//         <div className="Events">
//           <center>
//             <span class="title">Our Events</span>
//             <hr className="horiontal-line" />
//           </center>
//           <Timeline align="alternate">
//             {this.state.events.map((t, index) => {
//               return (
//                 <Event
//                   id={t._id}
//                   key={t._id}
//                   img={t.posterURL}
//                   width={this.state.width}
//                   title={t.name}
//                   date={t.date}
//                   desc={t.info}
//                   index={index}
//                 />
//               );
//             })}
//           </Timeline>
//         </div>
//       );
//     } else {
//       return (
//         <div className="Events">
//           <center>
//             <span class="title">Our Events</span>
//             <hr className="horiontal-line" />
//           </center>
//           <Timeline>
//             {this.state.events.map((t, index) => {
//               return (
//                 <EventPhone
//                   id={t._id}
//                   key={t._id}
//                   img={t.posterURL}
//                   width={this.state.width}
//                   title={t.name}
//                   date={t.date}
//                   desc={t.info}
//                   index={index}
//                 />
//               );
//             })}
//           </Timeline>
//         </div>
//       );
//     }
//   }
// }

export default function EventsList(){
  const [isUpdated, setIsUpdated] = useState({ value: null, width: 1000 });
  const [disable, setDisable] = useState([]);
  const data = useSelector((state) => state.event.event);
  const dispatch = useDispatch();
  if(data !== null && !isUpdated.value){
    setIsUpdated({ value: data, width: window.innerWidth });
  } else if(!isUpdated.value) {
    axios.get("https://backend-events.herokuapp.com/events?q=0").then(
      (value) => {
        setIsUpdated({ value: value.data, window: window.innerWidth });
        dispatch(setEvent({payload: value.data}));
      }
    );
  }
  useEffect(() => {
    window.scrollTo(0,0);
    const tokenAuth = localStorage.getItem('leAuthorisationToken');
    if(tokenAuth){
      axios.get("https://backend-events.herokuapp.com/users", {
        headers: {
          "auth-token": tokenAuth
        }
      }).then(res => {
        if(res.status === 200){
            setDisable(res.data.regEvents);
        }
      })
    }
  }, [])
  if(isUpdated.value){
    if (window.innerWidth > 768) {
      return (
        <div className="Events">
          <center>
            <span className="title">Our Events</span>
            <hr className="horiontal-line" />
          </center>
          <Timeline align="alternate">
            {isUpdated.value.map((t, index) => {
              if(disable.find(i => i === t._id)){
                return (
                  <Event
                    id={t._id}
                    key={t._id}
                    img={t.posterURL}
                    width={isUpdated.width}
                    title={t.name}
                    date={t.date}
                    desc={t.info}
                    index={index}
                    disable={true}
                    handler={setDisable}
                  />
                );
              } else {
                return (
                  <Event
                    id={t._id}
                    key={t._id}
                    img={t.posterURL}
                    width={isUpdated.width}
                    title={t.name}
                    date={t.date}
                    desc={t.info}
                    index={index}
                    disable={false}
                    handler={setDisable}
                  />
                );
              }
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
            {isUpdated.value.map((t, index) => {
              if(disable.find(i => i === t._id)){
                return (
                  <EventPhone
                    id={t._id}
                    key={t._id}
                    img={t.posterURL}
                    width={isUpdated.width}
                    title={t.name}
                    date={t.date}
                    desc={t.info}
                    index={index}
                    disable={true}
                    handler={setDisable}
                  />
                );
              } else {
                return (
                  <EventPhone
                    id={t._id}
                    key={t._id}
                    img={t.posterURL}
                    width={isUpdated.width}
                    title={t.name}
                    date={t.date}
                    desc={t.info}
                    index={index}
                    disable={false}
                    handler={setDisable}
                  />
                );
              }

            })}
          </Timeline>
        </div>
      );
    }
  } else {
    return (
      <SpinnerBox><Spinner /></SpinnerBox>
    )
  }
}
