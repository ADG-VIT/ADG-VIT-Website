import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 450px) {
    padding: 3rem 2rem;
  }
`;

export const Heading = styled.h1`
  color: var(--text);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 42px;
  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: var(--blue);
  font-size: 1.35rem;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
  &:hover {
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border-bottom: 2px solid var(--blue);
  }
`;

// Card styles

export const CardWrapper = styled.div`
  background: #191928;
  width: 19rem;
  border-radius: 0.6rem;
  overflow: hidden;
  margin: 0 4rem 2rem;
  user-select: none;
  @media screen and (max-width: 450px) {
    width: 15rem;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  height: 20rem;
  pointer-events: none;
  ${CardWrapper}:hover & {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const CardFooter = styled.div`
  background-color: #191928;
  color: var(--dark-mode-text);
  padding: 1.2rem;
`;

export const Title = styled.h1`
  line-height: 1.4;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;

export const About = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

// Project styles

export const ProjectWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(10, 1fr);
  color: var(--text);
  gap: 3rem;
  width: 80%;
  margin: 0rem auto 5rem;
  @media screen and (max-width: 1024px) {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
`;

// Left

export const ProjectImage = styled.div`
  grid-row: 1 / 9;
  grid-column: 1;
  width: 20rem;
  @media screen and (max-width: 1024px) {
    height: 25rem;
    width: auto;
  }
`;

export const ProjectTitle = styled.h1`
  font-size: 3rem;
  grid-row: 3;
  grid-column: 2 / 11;
  text-align: left;
  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 2rem;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  grid-row: 4;
  grid-column: 2 / 7;
  justify-content: left;
`;

export const ProjectLinkImage = styled.img`
  height: 2.5rem;
`;

export const ProjectAbout = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.3rem;
  grid-row: 5;
  grid-column: 2 / 6;
  text-align: left;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export const ProjectButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: var(--blue);
  color: var(--text);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  grid-row: 6;
  grid-column: 2 / 5;
  height: 3rem;
  @media screen and (max-width: 1024px) {
    width: 10rem;
    height: 3rem;
  }
  @media screen and (max-width: 400px) {
    width: 85%;
    font-size: 12px;
  }
`;

// Right

export const ProjectImageR = styled.div`
  grid-row: 1 / 9;
  grid-column: 5;
  width: 20rem;
  @media screen and (max-width: 1024px) {
    height: 25rem;
    width: auto;
  }
`;

export const ProjectTitleR = styled.h1`
  font-size: 3rem;
  grid-row: 3;
  grid-column: 3 / 5;
  text-align: right;
  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 2rem;
  }
`;

export const ProjectLinksR = styled.div`
  display: flex;
  align-items: center;
  grid-row: 4;
  grid-column: 2 / 5;
  justify-content: flex-end;
`;

export const ProjectAboutR = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.3rem;
  grid-row: 5;
  grid-column: 2 / 5;
  text-align: right;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export const ProjectButtonR = styled.button`
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
  cursor: pointer;
  height: 3rem;
  grid-row: 6;
  grid-column: 3 / 5;
  @media screen and (max-width: 1024px) {
    width: 10rem;
    height: 3rem;
  }
  @media screen and (max-width: 400px) {
    width: 85%;
    font-size: 12px;
  }
`;
