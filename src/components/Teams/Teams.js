import React from "react";
import TeamCard from "./TeamCard";
import { CardHandler, Title } from "./TeamsElements";
import {
	HeadingContainer,
	Heading,
	Link as SeeAll,
} from "../Projects/ProjectElements";
import Axios from "axios";
import { Spinner, SpinnerBox } from "../../containers/spinner";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { setTeam } from "../../store/Team";

const Teams = () => {
	const [isUpdated, setIsUpdated] = React.useState({
		value: false,
		data: {},
	});
	const data = useSelector((state) => state.team.team);
	const dispatch = useDispatch();
	if (data !== null && !isUpdated.value) {
		setIsUpdated({
			value: true,
			data: data,
		});
	} else if (!isUpdated.value) {
		Axios.get("https://backend-events.herokuapp.com/board").then((data) => {
			setIsUpdated({
				value: true,
				data: data.data,
			});
			dispatch(setTeam({ payload: data.data }));
		});
	}

	return (
		<React.Fragment>
			<HeadingContainer>
				<Heading>Our Team</Heading>
				<SeeAll to="/team">See All</SeeAll>
			</HeadingContainer>
			<CardHandler>
				{isUpdated.value &&
					isUpdated.data.map((i, ind) => {
						if (ind < 8) {
							return (
								<Fade
									bottom
									distance="25%"
									duration={500}
									delay={ind * 100}
									fraction={0.1}
								>
									<TeamCard
										key={ind}
										name={i.Name}
										desig={i.Designation}
										pic={i.Pic}
										linked={i.LinkedIn}
										git={i.Github}
										email={i.Email}
									/>
								</Fade>
							);
						} else {
							return null;
						}
					})}
			</CardHandler>
		</React.Fragment>
	);
};

export default Teams;

const FullTeams = () => {
	const [isUpdated, setIsUpdated] = React.useState({
		value: false,
		data: {},
	});
	const data = useSelector((state) => state.team.team);
	const dispatch = useDispatch();
	if (data !== null && !isUpdated.value) {
		setIsUpdated({
			value: true,
			data: data,
		});
	} else if (!isUpdated.value) {
		Axios.get("https://backend-events.herokuapp.com/board").then((data) => {
			setIsUpdated({
				value: true,
				data: data.data,
			});
			dispatch(setTeam({ payload: data.data }));
		});
	}
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
			<Fade bottom distance="25%">
				<Title>Our Team</Title>
			</Fade>
			<CardHandler>
				{isUpdated.value &&
					isUpdated.data.map((i, ind) => {
						return (
							<Fade
								bottom
								distance="25%"
								delay={ind * 100}
								duration={500}
							>
								<TeamCard
									key={ind}
									name={i.Name}
									desig={i.Designation}
									pic={i.Pic}
									linked={i.LinkedIn}
									git={i.Github}
									email={i.Email}
								/>
							</Fade>
						);
					})}
			</CardHandler>
		</div>
	);
};

export { FullTeams };
