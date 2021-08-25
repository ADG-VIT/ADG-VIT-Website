import React from "react";
import ReactModal from "react-modal";
import "./styles.css";
import axios from "axios";

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
          <div className="container" onClick={this.handleCloseModal}>
            <div className="row center">
              <div className="col-lg-6">
                <img src={t.posterURL} alt={t.name} className="img-fluid"></img>
              </div>
              <div className="col-lg-6 content-part ">
                <h1>{t.name}</h1>
                <h2>{t.date}</h2>
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
