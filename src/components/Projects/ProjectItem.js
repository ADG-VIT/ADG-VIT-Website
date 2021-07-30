import {
  ProjectWrapper,
  ProjectTitle,
  ProjectAbout,
  ProjectLinks,
  ProjectImage,
  ProjectButton,
  ProjectTitleR,
  ProjectAboutR,
  ProjectLinksR,
  ProjectImageR,
  ProjectButtonR,
} from "./ProjectElements";
import App from "./App.svg";

const ProjectItem = (props) => {
  if (props.right) {
    return (
      <ProjectWrapper>
        <ProjectImageR>
          <img src={App} alt="App" style={{width: "100%", height: "100%"}} />
        </ProjectImageR>
        <ProjectTitleR>ADG-Connect</ProjectTitleR>
        <ProjectLinksR >Here are the links</ProjectLinksR>
        <ProjectAboutR >
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          dolor inventore quia soluta ut. Id qui sunt quos in laboriosam.{" "}
        </ProjectAboutR>
        <ProjectButtonR  to="/home">
          Know More
        </ProjectButtonR>
      </ProjectWrapper>
    );
  }
  return (
    <ProjectWrapper>
      <ProjectImage>
        <img src={App} alt="App" style={{width: "100%", height: "100%"}} />
      </ProjectImage>
      <ProjectTitle >ADG-Connect</ProjectTitle>
      <ProjectLinks >Here are the links</ProjectLinks>
      <ProjectAbout >
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        dolor inventore quia soluta ut. Id qui sunt quos in laboriosam.{" "}
      </ProjectAbout>
      <ProjectButton to="/home">
        Know More
      </ProjectButton>
    </ProjectWrapper>
  );
};

export default ProjectItem;
