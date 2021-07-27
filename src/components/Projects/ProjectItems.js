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
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: var(--blue);
  font-size: 1rem;
`;

export const CardWrapper = styled.div`
  background: #191928;
  width: 20em;
  border-radius: 0.6em;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CardFooter = styled.div`
  background-color: #191928;
  color: var(--dark-mode-text);
  padding: 1.2em;
`;

export const Title = styled.h1`
  line-height: 1.4;
  font-size: 1.3em;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;

export const About = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
`;
