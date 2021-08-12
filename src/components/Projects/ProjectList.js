import React from "react";
import ProjectItem from "./ProjectItem";
import Axios from "axios";
import {Title} from "./ProjectElements";

const ProjectList = () => {
  const [isUpdated, setIsUpdated] = React.useState({ value: false, data: {} });
  React.useEffect(() => {
    Axios.get("https://backend-events.herokuapp.com/projects?q=0").then(
      (value) => {
        setIsUpdated({ value: true, data: value });
      }
    );
  }, []);
  return (
    <React.Fragment>
    <Title style={{"color": "var(--dark-mode-text)", "fontSize": "2rem", "margin": "1rem", "textAlign" : "center"}} >Our Projects</Title>
      {isUpdated.value &&
        isUpdated.data.data.map((i, ind) => {
          return (
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
          );
        })}
    </React.Fragment>
  );
};

export default ProjectList;
