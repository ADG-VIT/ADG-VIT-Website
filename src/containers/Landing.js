import React from 'react';
import HeroBox from '../components/Landing/Herobox/HeroBox';
import Projects from "../components/Landing/Projects"
import Domain from "../components/Landing/Domains"
import Teams from "../components/Landing/Team"
import Partners from '../components/Landing/Partners/Partners';
import Events from '../components/Landing/Events/Events';

const Landing = () => {
    return (
        <div>
            <HeroBox />
            <Events />
            <Projects />
            <Domain />
            <Partners />
            <Teams />
        </div>
    )
}

export default Landing;