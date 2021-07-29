import React from "react"
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  return (
    <React.Fragment>
      <ProjectItem key={0} />
      <ProjectItem key={1}  right={true} />
    </React.Fragment>
  );
};

export default ProjectList;
