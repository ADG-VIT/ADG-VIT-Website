import React from 'react'
import Teams from "../Teams/Teams"
import Fade from 'react-reveal/Fade';

export default function Team() {
    return (
        <div style={{"margin": "5rem 0"}}>
            <Fade bottom>
            <Teams />
            </Fade>
        </div>
    )
}
