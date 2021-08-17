import { React, useState, useEffect } from "react";

import AdgLogo from "./assets/adglogo.png";
import {
  AdgLogoWrap,
  BottomText,
  CopyrightWrap,
  Description,
  FollowUsHeader,
  FollowUsWrap,
  FooterContainer,
  FooterDescriptionWrap,
  FooterLink,
  HandleLink,
  HandleLinksWrap,
  HorizontalLine,
  LinksWrap,
  QuickLinksHeader,
  QuickLinksWrap,
  ToggleTheme,
  TopButton,
} from "./FooterElements";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import { MdKeyboardArrowUp } from "react-icons/md";
import Fade from "react-reveal/Fade"

const Footer = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const switchTheme = async () => {
      if (darkMode) {
        document.documentElement.style.setProperty(
          "--navbar-bg",
          "var(--navbar-dark)"
        );
        document.documentElement.style.setProperty(
          "--navbar-text",
          "var(--navbar-dark-text)"
        );
        document.documentElement.style.setProperty(
          "--dropdown-bg",
          "var(--dropdown-dark)"
        );
        document.documentElement.style.setProperty(
          "--background",
          "var(--dark-mode-bg)"
        );
        document.documentElement.style.setProperty(
          "--text",
          "var(--dark-mode-text)"
        );
      } else {
        document.documentElement.style.setProperty(
          "--navbar-bg",
          "var(--navbar-light)"
        );
        document.documentElement.style.setProperty(
          "--navbar-text",
          "var(--navbar-light-text)"
        );
        document.documentElement.style.setProperty(
          "--dropdown-bg",
          "var(--dropdown-light)"
        );
        document.documentElement.style.setProperty(
          "--background",
          "var(--light-mode-bg)"
        );
        document.documentElement.style.setProperty(
          "--text",
          "var(--light-mode-text)"
        );
      }
    };
    switchTheme();
  }, [darkMode]);

  return (
    <Fade bottom distance="25%">
      <FooterContainer>
        <FooterDescriptionWrap>
          <AdgLogoWrap>
            <img src={AdgLogo} alt="ADG Logo" />
          </AdgLogoWrap>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
        </FooterDescriptionWrap>
        <QuickLinksWrap>
          <QuickLinksHeader>Quick Links</QuickLinksHeader>
          <LinksWrap>
            <FooterLink to="/events">Events</FooterLink>
            <FooterLink to="/partners">Partners</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/team">Team</FooterLink>
            <FooterLink to="/domains">Domains</FooterLink>
            <FooterLink
              to="/"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              About Us
            </FooterLink>
          </LinksWrap>
        </QuickLinksWrap>
        <FollowUsWrap>
          <FollowUsHeader>Follow Us</FollowUsHeader>
          <HandleLinksWrap>
            <HandleLink href="https://www.facebook.com/vitios/" target="_blank">
              <FaFacebook />
            </HandleLink>
            <HandleLink
              href="https://www.linkedin.com/company/adgvit/"
              target="_blank"
            >
              <FaLinkedin />
            </HandleLink>
            <HandleLink
              href="https://www.instagram.com/adgvit/"
              target="_blank"
            >
              <FaInstagram />
            </HandleLink>
            <HandleLink href="https://twitter.com/adgvit" target="_blank">
              <FaTwitter />
            </HandleLink>
            <HandleLink href="https://medium.com/adg-vit" target="_blank">
              <FaMedium />
            </HandleLink>
            <HandleLink href="https://github.com/ADG-VIT" target="_blank">
              <FaGithub />
            </HandleLink>
          </HandleLinksWrap>
        </FollowUsWrap>
        <CopyrightWrap>
          <HorizontalLine />
          <BottomText>
            Developed by ADG | © 2021 All rights reserved.
          </BottomText>
        </CopyrightWrap>
        <TopButton
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <MdKeyboardArrowUp />
        </TopButton>
        <ToggleTheme onClick={toggleTheme}>
          {darkMode ? <FaMoon /> : <FaSun />}
        </ToggleTheme>
      </FooterContainer>
    </Fade>
  );
};

export default Footer;
