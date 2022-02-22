import React from "react";
import Teams from "../Teams/Teams";
import Fade from "react-reveal/Fade";
export default function Team() {
	return (
		<div style={{ margin: "2rem 0" }}>
			<Fade bottom distance="25%">
				<Teams />
			</Fade>
		</div>
	);
}
