import {Box, Card, Heading, Para} from "./DomainElements"
import {VscGlobe} from "react-icons/vsc"
import {GrAndroid} from "react-icons/gr"
import {SiIos} from "react-icons/si"
import {CgIfDesign} from "react-icons/cg"

const DomainCard = (props) => {
    return (
        <Card>
            <Box>
                {props.icon === "web" && <VscGlobe />}
                {props.icon === "android" && <GrAndroid />}
                {props.icon === "ios" && <SiIos />}
                {props.icon === "design" && <CgIfDesign />}
            </Box>
            <Heading>{props.name}</Heading>
            <Para><p>{props.info}</p></Para>
        </Card>
    )
}


export default DomainCard;