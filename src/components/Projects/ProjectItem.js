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
} from "./ProjectElements";
import Modal from "./Modal"
import Android from "./Google Play.svg";
import Apple from "./Apple Store.svg";

const ProjectItem = (props) => {

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
          <a href={"https://" + props.android} style={{"marginRight": "1rem"}}>
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
        <Modal id={props.id} des={props.about} link={props.more} img={props.imgSrc} right={true}></Modal>
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
      <a href={"https://" + props.android}>
            <ProjectLinkImage
              src={Android}
              alt="Google play link"
            ></ProjectLinkImage>
          </a>
          <a href={"https://" + props.ios} style={{"marginLeft": "1rem"}}>
            <ProjectLinkImage
              src={Apple}
              alt="Apple play link"
            ></ProjectLinkImage>
          </a>
      </ProjectLinks>
      <ProjectAbout>{props.about}</ProjectAbout>
      <Modal id={props.id} des={props.about} link={props.more} img={props.imgSrc} right={false}></Modal>
    </ProjectWrapper>
  );
};

export default ProjectItem;
