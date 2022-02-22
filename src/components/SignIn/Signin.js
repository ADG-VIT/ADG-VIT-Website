import React from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

const modalElement = document.getElementById("modal");

const SignInModal = (props) => {
	return createPortal(<Modal onClose={props.onClose} />, modalElement);
};

export default SignInModal;
