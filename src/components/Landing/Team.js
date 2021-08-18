import React from 'react'
import Teams from "../Teams/Teams"
import Fade from 'react-reveal/Fade';
import {Transition} from "react-transition-group"

export default function Team() {
    return (
        <div style={{"margin": "3rem 0"}}>
            <Transition>
                <Fade bottom distance="25%">
                    <Teams />
                </Fade>
            </Transition>
        </div>
    )
}
