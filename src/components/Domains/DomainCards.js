import { Box, Card, Heading, Para } from "./DomainElements";
import { VscGlobe } from "react-icons/vsc";
import { GrAndroid } from "react-icons/gr";
import { RiAppStoreLine } from "react-icons/ri";
import { CgIfDesign } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";

const DomainCard = (props) => {
	return (
		<Card>
			<Box>
				{props.icon === "ios" && <RiAppStoreLine />}
				{props.icon === "android" && <GrAndroid />}
				{props.icon === "web" && <VscGlobe />}
				{props.icon === "ml" && <CgIfDesign />}
				{props.icon === "design" && <MdDesignServices />}
				{props.icon === "marketing" && <VscGlobe />}
				{props.icon === "sponsorship" && <GrAndroid />}
				{props.icon === "logistics" && <RiAppStoreLine />}
				{props.icon === "media" && <CgIfDesign />}
			</Box>
			<Heading>{props.name}</Heading>
			<Para>
				<p>{props.info}</p>
			</Para>
		</Card>
	);
};

export default DomainCard;
