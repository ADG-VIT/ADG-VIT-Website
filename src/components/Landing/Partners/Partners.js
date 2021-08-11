import React from "react";
import { Heading, HeadingContainer } from "../../Projects/ProjectElements";
import { Partner, PartnersWrap, SeeAll } from "./PartnersElements";
import image from "./assets/image.png";

export default function Partners() {
  return (
    <div style={{ margin: "5rem 0" }}>
      <HeadingContainer>
        <Heading>Our Projects</Heading>
        <SeeAll to="/projects/">See All</SeeAll>
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
  );
}
