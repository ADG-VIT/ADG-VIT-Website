import {
  ProjectWrapper,
  ProjectTitle,
  ProjectAbout,
  ProjectLinks,
  ProjectImage,
  ProjectButton,
} from "./ProjectElements";
import App from "./App.svg";

const ProjectItem = (props) => {
  var ImageStyle = {
    "grid-row": "1 / 6",
    "grid-column": "1",
  };
  var TitleStyle = {
    "grid-row": "1",
    "grid-column": "2 / 6",
    "text-align": "left",
  };
  var AboutStyle = {
    "grid-row": "3",
    "grid-column": "2 / 4",
    "text-align": "left",
  };
  var LinkStyle = {
    "grid-row": "2",
    "grid-column": "2 / 6",
    "justify-content": "left",
  };
  var ButtonStyle = {
    "grid-row": "4",
    "grid-column": "2 / 3",
  };
  if (props.right) {
    ImageStyle = {
      "grid-row": "1 / 6",
      "grid-column": "5",
    };
    TitleStyle = {
      "grid-row": "1",
      "grid-column": "1 / 5",
      "text-align": "right",
    };
    AboutStyle = {
      "grid-row": "3",
      "grid-column": "3 / 5",
      "text-align": "right",
    };
    LinkStyle = {
      "grid-row": "2",
      "grid-column": "4 / 5",
      "justify-content": "flex-end",
    };
    ButtonStyle = {
      "grid-row": "4",
      "grid-column": "4 / 5",
    };
  }
  return (
    <ProjectWrapper>
      <ProjectImage style={ImageStyle}>
        <img src={App} alt="App" style={{ width: "100%", height: "100%" }} />
      </ProjectImage>
      <ProjectTitle style={TitleStyle}>ADG-Connect</ProjectTitle>
      <ProjectLinks style={LinkStyle}>Here are the links</ProjectLinks>
      <ProjectAbout style={AboutStyle}>
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        dolor inventore quia soluta ut. Id qui sunt quos in laboriosam.{" "}
      </ProjectAbout>
      <ProjectButton style={ButtonStyle}>Know More</ProjectButton>
    </ProjectWrapper>
  );
};

export default ProjectItem;
