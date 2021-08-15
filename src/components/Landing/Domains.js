import React from 'react'
import {DomainLanding} from "../Domains/Domain"
import Fade from 'react-reveal/Fade';

export default function Domains() {
    return (
        <div style={{"margin": "2rem 0"}}>
            <Fade bottom>
            <DomainLanding />
            </Fade>
        </div>
    )
}
