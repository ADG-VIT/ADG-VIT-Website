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
  ProjectLinkImage,
} from "./ProjectElements";
import Android from "./Google Play.svg";
import Apple from "./Apple Store.svg";

const ProjectItem = (props) => {

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "https://www.google.com";
  }

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
          <a href={"https://" + props.android} style={{"marginLeft": "1rem"}}>
            <ProjectLinkImage
              src={Android}
              alt="Google play link"
            ></ProjectLinkImage>
          </a>
          <a href={"https://" + props.ios}>
            <ProjectLinkImage
              src={Apple}
              alt="Apple play link"
            ></ProjectLinkImage>
          </a>
        </ProjectLinksR>
        <ProjectAboutR>{props.about}</ProjectAboutR>
        <ProjectButtonR onClick={handleClick} >Know More</ProjectButtonR>
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
      <a href={"https://" + props.android} style={{"marginRight": "1rem"}} >
            <ProjectLinkImage
              src={Android}
              alt="Google play link"
            ></ProjectLinkImage>
          </a>
          <a href={"https://" + props.ios}>
            <ProjectLinkImage
              src={Apple}
              alt="Apple play link"
            ></ProjectLinkImage>
          </a>
      </ProjectLinks>
      <ProjectAbout>{props.about}</ProjectAbout>
      <ProjectButton onClick={handleClick}>Know More</ProjectButton>
    </ProjectWrapper>
  );
};

export default ProjectItem;
