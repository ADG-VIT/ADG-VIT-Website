import React from "react";
import ReactModal from "react-modal";
import "./styles.css";
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
export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      events: [],
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
    axios
      .get(`https://backend-events.herokuapp.com/events/${this.props.id}`)
      .then((res) => {
        const events = res.data;
        this.setState({ events: events });
      });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const t = this.state.events;
    return (
      <div>
        <button className="register-button" onClick={this.handleOpenModal}>
          Know More
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div
            className="event-modal-container"
            onClick={this.handleCloseModal}
          >
            <div className="modal-wrap">
              <img src={t.posterURL} alt={t.name} className="event-modal-image"></img>
              <div className="modal-description-wrap">
                <h1>{t.name}</h1>
                <h2>{convertTime(t.date)}</h2>
                <p>{t.info}</p>
                <button className="register-button">Register Now</button>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}
