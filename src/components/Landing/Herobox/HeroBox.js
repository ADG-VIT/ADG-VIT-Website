import React from "react";
import {
  About,
  ADGLogoWrap,
  HeroBoxContainer,
  JoinUsButton,
  MainHeader,
  Tagline,
} from "./HeroBoxElements";
import AdgLogo from "./assets/adglogo.png";

const HeroBox = () => {
  return (
    <>
      <HeroBoxContainer>
        <ADGLogoWrap>
          <img src={AdgLogo} alt="ADG Logo" />
        </ADGLogoWrap>
        <MainHeader>Apple Developers Group</MainHeader>
        <Tagline>Tagline</Tagline>
        <About>
          Apple Developers Group (ADG) is a name synonymous with excellence,
          simplicity and dedication. It is a registered student community at
          VIT, Vellore established under the Apple University program. A coterie
          of talented minds seeking not just success but perfection.
        </About>
        <JoinUsButton to="/">Join us</JoinUsButton>
      </HeroBoxContainer>
    </>
  );
};

export default HeroBox;
