import React from "react";
import ProjectItem from "./ProjectItem";
import Axios from "axios";
import { Title } from "./ProjectElements";
import Fade from "react-reveal/Fade";
import { Spinner, SpinnerBox } from "../../containers/spinner";

const ProjectList = () => {
	const [isUpdated, setIsUpdated] = React.useState({
		value: false,
		data: {},
	});
	React.useEffect(() => {
		Axios.get("https://backend-events.herokuapp.com/projects?q=0").then(
			(value) => {
				setIsUpdated({ value: true, data: value.data });
			}
		);
	}, [])
	const style = isUpdated.value
		? null
		: { height: "10vh", overflow: "hidden" };
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div style={style}>
			{!isUpdated.value && (
				<SpinnerBox>
					<Spinner />
				</SpinnerBox>
			)}
			<Fade bottom>
				<Title
					style={{
						color: "var(--text)",
						fontSize: "2rem",
						margin: "1rem",
						textAlign: "center",
					}}
				>
					Our Projects
				</Title>
			</Fade>
			{isUpdated.value &&
				isUpdated.data.map((i, ind) => {
					return (
						<Fade bottom distance="10%">
							<ProjectItem
								key={i._id}
								imgSrc={i.mockup}
								title={i.title}
								about={i.description}
								more={i.websiteLink}
								android={i.androidLink}
								ios={i.iosLink}
								right={ind % 2 !== 0 && true}
							/>
						</Fade>
					);
				})}
		</div>
	);
};

export default ProjectList;
