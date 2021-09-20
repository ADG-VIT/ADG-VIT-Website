import React from "react";
import ReactModal from "react-modal";
import "./styles.css";
import { FaTimes } from "react-icons/fa";
import {ProjectButton, ProjectButtonR} from "./ProjectElements";


const Modal = (props) => {
  const [data, setData] = React.useState({ showModal: false, projects: {} });
  const handleOpenModal = () => {
    setData({
        showModal: true,
        projects: {
            link: props.link,
            des: props.des,
            image: props.img}});
  }
  const handleCloseModal = () => {
    setData((prev) => {
      return {
        ...prev,
        showModal: false
      }
    })
  }
  return (
    <React.Fragment>
      {!props.right ? <ProjectButton onClick={handleOpenModal}>Know More</ProjectButton> : <ProjectButtonR onClick={handleOpenModal}>Know More</ProjectButtonR>}
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
              src={data.projects.link}
              alt={data.projects.name}
              className="event-modal-image"
            ></img>
            <div className="modal-description-wrap">
              <h1>{data.projects.name}</h1>
              <p>{data.projects.des}</p>
            </div>
          </div>
        </div>
      </ReactModal>
    </React.Fragment>
  );
};

export default Modal;