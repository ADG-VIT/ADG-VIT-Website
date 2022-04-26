import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/Store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
	<Provider store={store}>
		{/* <HashRouter> */}
			<App />
		{/* </HashRouter> */}
	</Provider>,
	document.getElementById("root")
);
