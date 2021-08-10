import React from 'react';
import HeroBox from '../components/Landing/Herobox/HeroBox';
import Projects from "../components/Landing/Projects"
import Domain from "../components/Landing/Domains"
import Teams from "../components/Landing/Team"

const Landing = () => {
    return (
        <div>
            <HeroBox />
            <Projects />
            <Domain />
            <Teams />
        </div>
    )
}

export default Landing;