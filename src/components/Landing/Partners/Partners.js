import React from "react";
import { Partner, PartnersWrap, SeeAll, Heading, HeadingContainer } from "./PartnersElements";
import image from "./assets/image.png";
import Fade from "react-reveal/Fade"

export default function Partners() {
  return (
    <Fade bottom distance="25%">
      <div style={{ margin: "5rem 0" }}>
      <HeadingContainer>
        <Heading>Our Partners</Heading>
        <SeeAll to="/partners/">See All</SeeAll>
      </HeadingContainer>
      <PartnersWrap>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
      </PartnersWrap>
    </div>
    </Fade>
  );
}


export const PartnerFull = () => {
  return (
    <PartnersWrap>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
        <Partner>
          <img src={image} alt="" />
        </Partner>
      </PartnersWrap>
  )
}