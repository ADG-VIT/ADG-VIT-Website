import React from "react";
import {
  Partner,
  PartnersWrap,
  SeeAll,
  Heading,
  HeadingContainer,
  Title,
} from "./PartnersElements";
import image from "./assets/image.png";
import Fade from "react-reveal/Fade";

export default function Partners() {
  return (
    <Fade bottom distance="25%">
      <div style={{ margin: "2rem 0" }}>
        <HeadingContainer>
          <Heading>Our Partners</Heading>
          <SeeAll to="/partners/">See All</SeeAll>
        </HeadingContainer>
        <PartnersWrap>
          {[...Array(20).keys()].map((i, ind) => {
            return (
              <Fade
                bottom
                distance="25%"
                delay={ind * 100}
                duration={500}
                fraction={0.1}
              >
                <Partner>
                  <img src={image} alt="" />
                </Partner>
              </Fade>
            );
          })}
        </PartnersWrap>
      </div>
    </Fade>
  );
}

export const PartnerFull = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Title>Our Partners</Title>
      <PartnersWrap>
        {[...Array(20).keys()].map((i, ind) => {
          return (
            <Fade
              bottom
              distance="25%"
              delay={ind * 100}
              duration={500}
              fraction={0.1}
            >
              <Partner>
                <img src={image} alt="" />
              </Partner>
            </Fade>
          );
        })}
      </PartnersWrap>
    </React.Fragment>
  );
};
