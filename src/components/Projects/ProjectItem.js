import {
  ProjectWrapper,
  ProjectTitle,
  ProjectAbout,
  ProjectLinks,
  ProjectImage,
  ProjectTitleR,
  ProjectAboutR,
  ProjectLinksR,
  ProjectImageR,
  ProjectLinkImage,
  ProjectButton,
  ProjectButtonR
} from "./ProjectElements";
import Android from "./Google Play.svg";
import Apple from "./Apple Store.svg";

const ProjectItem = (props) => {
  console.log(props);
  if (props.right) {
    return (
      <ProjectWrapper>
        <ProjectImageR>
          <img
            src={props.imgSrc}
            alt="App"
            style={{ width: "100%", height: "100%" }}
          />
        </ProjectImageR>
        <ProjectTitleR>{props.title}</ProjectTitleR>
        <ProjectLinksR>
          <a href={props.android} style={{"marginRight": "1rem"}}>
            <ProjectLinkImage
              src={Android}
              alt="Google play link"
            ></ProjectLinkImage>
          </a>
          <a href={props.ios}>
            <ProjectLinkImage
              src={Apple}
              alt="Apple play link"
            ></ProjectLinkImage>
          </a>
        </ProjectLinksR>
        <ProjectAboutR>{props.about}</ProjectAboutR>
        <ProjectButtonR onClick={() => {window.open(props.more, "_blank")}}>Know More</ProjectButtonR>
      </ProjectWrapper>
    );
  }
  return (
    <ProjectWrapper>
      <ProjectImage>
        <img
          src={props.imgSrc}
          alt="App"
          style={{ width: "100%", height: "100%" }}
        />
      </ProjectImage>
      <ProjectTitle>{props.title}</ProjectTitle>
      <ProjectLinks>
      <a href={props.android}>
            <ProjectLinkImage
              src={Android}
              alt="Google play link"
            ></ProjectLinkImage>
          </a>
          <a href={props.ios} style={{"marginLeft": "1rem"}}>
            <ProjectLinkImage
              src={Apple}
              alt="Apple play link"
            ></ProjectLinkImage>
          </a>
      </ProjectLinks>
      <ProjectAbout>{props.about}</ProjectAbout>
      <ProjectButton onClick={() => {window.open(props.more, "_blank")}}>Know More</ProjectButton>
    </ProjectWrapper>
  );
};

export default ProjectItem;
