import React from 'react';
import HeroBox from '../components/Landing/Herobox/HeroBox';
import Projects from "../components/Landing/Projects"
import Domain from "../components/Landing/Domains"
import Teams from "../components/Landing/Team"
import Partners from '../components/Landing/Partners/Partners';
import Events from '../components/Landing/Events/Events';
import {Spinner, SpinnerBox} from "./spinner"

const Landing = () => {
    const [isReady, setIsReady] = React.useState(false);
    const handleView = () => {
        setIsReady(true);
    }
    const style = isReady ? null : {"height": "10vh", "overflow": "hidden"}
    return (
        <div style={style}>
        {!isReady && <SpinnerBox><Spinner /></SpinnerBox>}
        <HeroBox />
          <Events />
            <Projects handleView = {handleView}/>
            <Domain />
            <Partners />
            <Teams />
        </div>
    )
}

export default Landing;