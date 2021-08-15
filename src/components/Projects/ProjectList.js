import React from "react";
import ProjectItem from "./ProjectItem";
import Axios from "axios";
import {Title} from "./ProjectElements";
import Fade from "react-reveal/Fade"
import {Spinner, SpinnerBox} from "../../containers/spinner"

const ProjectList = () => {
  const [isUpdated, setIsUpdated] = React.useState({ value: false, data: {} });
  React.useEffect(() => {
    Axios.get("https://backend-events.herokuapp.com/projects?q=0").then(
      (value) => {
        setIsUpdated({ value: true, data: value });
      }
    );
  }, []);
  const style = isUpdated.value ? null : {"height": "10vh", "overflow": "hidden"}
  return (
    <div style={style}>
    {!isUpdated.value && <SpinnerBox><Spinner /></SpinnerBox>}
    <Fade bottom>
    <Title style={{"color": "var(--dark-mode-text)", "fontSize": "2rem", "margin": "1rem", "textAlign" : "center"}} >Our Projects</Title>
    </Fade>
      {isUpdated.value &&
        isUpdated.data.data.map((i, ind) => {
          return (
            <Fade bottom>
            <ProjectItem
              key={ind}
              imgSrc={i.mockup}
              title={i.title}
              about={i.description}
              more={i.websiteLink}
              android={i.androidLink}
              ios={i.iosLink}
              right={ind % 2 !== 0 && true}
            />
            </Fade>
          );
        })}
    </div>
  );
};

export default ProjectList;
