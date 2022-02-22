import React from "react";
import Project from "../Projects/Projects";
import Fade from "react-reveal/Fade";

export default function Projects(props) {
	return (
		<div style={{ margin: "3rem 0" }}>
			<Fade bottom distance="25%">
				<Project ready={props.handleView} />
			</Fade>
		</div>
	);
}
