import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

import background from "./assets/herobox-background.png";

export const HeroBoxContainer = styled.div`
  min-height: calc(100vh - 80px);
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ADGLogoWrap = styled.div`
  width: 9rem;
  margin-bottom: 20px;
  margin-top: 10px;

  img {
    width: 100%;
  }
`;

export const MainHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  text-align: center;

  @media screen and (max-width: 650px) {
    font-size: 40px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

export const Tagline = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  text-align: center;

  @media screen and (max-width: 650px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export const About = styled.p`
  width: 40%;
  text-align: center;
  opacity: 0.8;
  font-size: 1rem;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 40px;

  @media screen and (max-width: 1100px) {
    width: 50%;
  }

  @media screen and (max-width: 850px) {
    width: 60%;
  }

  @media screen and (max-width: 650px) {
    width: 75%;
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    width: 85%;
  }
`;

export const JoinUsButton = styled(LinkRouter)`
  width: 250px;
  min-height: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 400px) {
    width: 50%;
    font-size: 14px;
  }
`;
