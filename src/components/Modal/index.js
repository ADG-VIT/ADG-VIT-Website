import React from "react";
import ReactModal from "react-modal";
import "./styles.css";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import Banner from "../SignIn/Banner";
import axios from "axios";

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


const Modal = (props) => {
  const [data, setData] = React.useState({ showModal: false, events: [] });
  const [banner, setBanner] = React.useState({value: false, data: ''});
  const events = useSelector((state) => state.event.event);
  var token = useSelector((state) => state.counter.leAuthorisationToken);
  const handleOpenModal = () => {
    setData((prev) => {
      return {
        ...prev,
        showModal: true
      }
    });
    events.forEach((i) => {
      if(i._id === props.id){
        setData((prev) => {
          return {
            ...prev,
            events: {
              ...i
            }
          }
        })
      }
    })
  }
  const handleCloseModal = () => {
    setData((prev) => {
      return {
        ...prev,
        showModal: false
      }
    });
    setBanner({value: false, data: ''});
  };

  const handleRegister = () => {
    if(!token){
      if(!localStorage.getItem('leAuthorisationToken')){
        setBanner({value: true, data: 'Please sign in'});
      } else {
        axios.post(`https://backend-events.herokuapp.com/events/${props.id}`, undefined, {
          headers: {
            'auth-token': localStorage.getItem('leAuthorisationToken')
          }
        }).then(res => {
          if (res.status === 200) {
            setBanner({value: true, data: 'Successfully registered'})
          }
        }).catch(err => console.log(err)).finally(() => {
          setTimeout(() => {
            setBanner({value: false, data: ''})
          }, 1000);
        })
      }
    } else {
      axios.post(`https://backend-events.herokuapp.com/events/${props.id}`, undefined, {
        headers: {
          'auth-token': token
        }
      }).then(res => {
        if (res.status === 200) {
          setBanner({value: true, data: 'Successfully registered'})
        }
      }).catch(err => console.log(err)).finally(() => {
        setTimeout(() => {
          setBanner({value: false, data: ''})
        }, 1000);
      })
    }
  }
  return (
    <React.Fragment>
      {banner.value ? <Banner message={banner.data} /> : null}
    <div>
      <button className="register-button" onClick={handleOpenModal}>
        Know More
      </button>
      <ReactModal
        isOpen={data.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
        >
        <div className="event-modal-container">
          <div className="modal-wrap">
            <FaTimes
              style={{
                color: "var(--text)",
                position: "absolute",
                top: 15,
                right: 15,
                cursor: "pointer",
              }}
              onClick={handleCloseModal}
              />
            <img
              src={data.events.posterURL}
              alt={data.events.name}
              className="event-modal-image"
              ></img>
            <div className="modal-description-wrap">
              <h1>{data.events.name}</h1>
              <h2>{convertTime(data.events.date)}</h2>
              <p>{data.events.info}</p>
              <button className="register-button" onClick={handleRegister}>Register Now</button>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
    </React.Fragment>
  );
};

export default Modal;


// export default class Modal extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showModal: false,
//       events: [],
//     };

//     this.handleOpenModal = this.handleOpenModal.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//   }
//   handleOpenModal() {
//     this.setState({ showModal: true });
//     axios
//       .get(`https://backend-events.herokuapp.com/events/${this.props.id}`)
//       .then((res) => {
//         const events = res.data;
//         this.setState({ events: events });
//       });
//   }
//   handleCloseModal() {
//     this.setState({ showModal: false });
//   }

//   render() {
//     const t = this.state.events;
//     return (
//       <div>
//         <button className="register-button" onClick={this.handleOpenModal}>
//           Know More
//         </button>
//         <ReactModal
//           isOpen={this.state.showModal}
//           contentLabel="onRequestClose Example"
//           onRequestClose={this.handleCloseModal}
//           className="Modal"
//           overlayClassName="Overlay"
//         >
//           <div
//             className="event-modal-container"
//           >
//             <div className="modal-wrap">
//               <FaTimes
//                 style={{
//                   color: "var(--text)",
//                   position: "absolute",
//                   top: 15,
//                   right: 15,
//                   cursor: "pointer",
//                 }}
//                 onClick={this.handleCloseModal}
//               />
//               <img
//                 src={t.posterURL}
//                 alt={t.name}
//                 className="event-modal-image"
//               ></img>
//               <div className="modal-description-wrap">
//                 <h1>{t.name}</h1>
//                 <h2>{convertTime(t.date)}</h2>
//                 <p>{t.info}</p>
//                 <button className="register-button">Register Now</button>
//               </div>
//             </div>
//           </div>
//         </ReactModal>
//       </div>
//     );
//   }
// }