import React from "react";
import { HeadingContainer, Heading, Link as SeeAll } from "./ProjectElements";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from "axios";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1240 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1240, min: 1130 },
		items: 3,
	},
	smallTablet: {
		breakpoint: { max: 1130, min: 778 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 778, min: 0 },
		items: 1,
	},
};

export default function Projects(props) {
	const [isUpdated, setIsUpdated] = React.useState({
		value: false,
		data: {},
	});

	React.useEffect(() => {
		Axios.get("https://backend-events.herokuapp.com/projects?q=0&home=true").then(
			(value) => {
				handleUpdate(value);
			}
		);
	}, [])
	const handleUpdate = (value) => {
		setIsUpdated({ value: true, data: value.data.data });
	};
	return (
		<React.Fragment>
			<HeadingContainer>
				<Heading>Our Projects</Heading>
				<SeeAll to="/projects/">See All</SeeAll>
			</HeadingContainer>
			{isUpdated.value && (
				<Carousel responsive={responsive}>
					{isUpdated.data.map((i, ind) => {
						return (
							<Card
								key={ind}
								imageSrc={i.mockup}
								title={i.title}
								about={i.shortDescription}
							/>
						);
					})}
				</Carousel>
			)}
		</React.Fragment>
	);
}
