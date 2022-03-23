import React from "react";
import {
  Partner,
  PartnersWrap,
  SeeAll,
  Heading,
  HeadingContainer,
  Title,
} from "./PartnersElements";
import Fade from "react-reveal/Fade";

const partners = [
  "https://imgur.com/z9GMfWF.png",
  "https://imgur.com/01pGFig.png",
  "https://imgur.com/xjbRIAj.png",
  "https://imgur.com/v2YRSuQ.png",
  "https://imgur.com/3qnub9u.png",
  "https://imgur.com/CGSP7pq.png",
  "https://imgur.com/FRs9XwQ.png",
  "https://imgur.com/mtEFGib.png",
  "https://imgur.com/RWd5Yfa.png",
  "https://imgur.com/67AlaBe.png",
  "https://imgur.com/DzSHj2n.png",
  "https://imgur.com/7hxG7xJ.png",
  "https://imgur.com/ToPUKB9.png",
  "https://imgur.com/0VArW0S.png",
  "https://imgur.com/c6J2uIp.png",
  "https://imgur.com/ehEwp6G.png",
  "https://imgur.com/YxKicqL.png",
  "https://imgur.com/Junw92m.png",
  "https://imgur.com/OMhLPRb.png",
  "https://imgur.com/wTfSCjw.png",
  "https://imgur.com/2SxrAWA.png",
];

export default function Partners() {
  return (
    <Fade bottom distance="25%">
      <div style={{ margin: "2rem 0" }}>
        <HeadingContainer>
          <Heading>Our Partners</Heading>
          <SeeAll to="/partners/">See All</SeeAll>
        </HeadingContainer>
        <PartnersWrap>
          {partners.map((i, ind) => {
            return (
              <Fade
                bottom
                distance="25%"
                delay={ind * 100}
                duration={500}
                fraction={0.1}
              >
                <Partner>
                  <img src={i} alt="" />
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
        {partners.map((i, ind) => {
          return (
            <Fade
              bottom
              distance="25%"
              delay={ind * 100}
              duration={500}
              fraction={0.1}
            >
              <Partner>
                <img src={i} alt="" />
              </Partner>
            </Fade>
          );
        })}
      </PartnersWrap>
    </React.Fragment>
  );
};
