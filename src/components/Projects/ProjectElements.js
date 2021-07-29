import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
`;

export const Heading = styled.h1`
  color: var(--dark-mode-text);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 42px;
  @media screen and (max-width: 450px){
      font-size: 1.5rem;
  }
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: var(--blue);
  font-size: 1rem;
  @media screen and (max-width: 450px){
      font-size: 0.75rem;
  }
`;

// Card styles

export const CardWrapper = styled.div`
  background: #191928;
  width: 19rem;
  border-radius: 0.6rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  margin: 0 4rem 2rem;
  @media screen and (max-width: 450px){
      width: 15rem;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CardFooter = styled.div`
  background-color: #191928;
  color: var(--dark-mode-text);
  padding: 1.2rem;
`;

export const Title = styled.h1`
  line-height: 1.4;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;

export const About = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
`;


// Project styles

export const ProjectWrapper = styled.div`
  height: 30rem;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-template-rows: repeat(5,1fr);
  color: var(--dark-mode-text);
  margin: 4rem;
`

export const ProjectImage = styled.div`
  grid-row: 1 / 6;
  grid-column: 1;
`

export const ProjectTitle = styled.h1`
  font-size: 3rem;
  margin: 1rem;
`

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`

export const ProjectAbout = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.3rem;
  margin: 1rem;
`

export const ProjectButton = styled(LinkRouter)`
  width: 15rem;
  height: 3rem;
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
  margin: 1rem;
  @media screen and (max-width: 400px) {
    width: 85%;
    font-size: 12px;
  }
`;