import React from "react"
import {CardWrapper, CardBody, CardImage, CardTitle, CardDesig} from "./TeamsElements"

const TeamCard = (props) => {
    return (
        <CardWrapper>
            <CardImage src={props.pic} alt={"Picture of " + props.name} />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardDesig>{props.desig}</CardDesig>
            </CardBody>
        </CardWrapper>
    )
}


export default TeamCard;