import React from 'react'
import Project from "../Projects/Projects";
import Fade from 'react-reveal/Fade';

export default function Projects(props) {
    return (
        <div style={{"margin": "5rem 0"}}>
            <Fade bottom>
            <Project ready={props.handleView} />
            </Fade>
        </div>
    )
}
