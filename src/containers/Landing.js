import React from 'react';
import HeroBox from '../components/Landing/Herobox/HeroBox';
import Projects from "../components/Landing/Projects"
import Domain from "../components/Landing/Domains"
import Teams from "../components/Landing/Team"
import Partners from '../components/Landing/Partners/Partners';

const Landing = () => {
    return (
        <div>
            <HeroBox />
            <Projects />
            <Domain />
            <Partners />
            <Teams />
        </div>
    )
}

export default Landing;