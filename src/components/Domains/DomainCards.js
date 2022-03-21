import { Box, Card, Heading, Para } from "./DomainElements";
// import { VscGlobe } from "react-icons/vsc";
// import { GrAndroid } from "react-icons/gr";
// import { RiAppStoreLine } from "react-icons/ri";
// import { CgIfDesign } from "react-icons/cg";
// import { MdDesignServices } from "react-icons/md";

const DomainCard = (props) => {
  return (
    <Card>
      <Box>
        <img
          style={{ height: "70px" }}
          src={props.icon}
          alt={props.name + " icon"}
        />
      </Box>
      <Heading>{props.name}</Heading>
      <Para>
        <p>{props.info}</p>
      </Para>
    </Card>
  );
};

export default DomainCard;
