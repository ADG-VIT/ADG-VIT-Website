import React from 'react'
import Project from "../Projects/Projects";

export default function Projects(props) {
    return (
        <div style={{"margin": "5rem 0"}}>
            <Project ready={props.handleView} />
        </div>
    )
}
