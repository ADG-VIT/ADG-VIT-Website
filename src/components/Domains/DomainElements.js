import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Heading = styled.h1`
  font-size: 2.3rem;
  color: var(--text);
  text-align: left;

  @media screen and (max-width: 1280px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 383px) {
    font-size: 1.5rem;
  }
`;

export const Main = styled.h1`
  font-size: 2rem;
  color: var(--text);
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 1rem;
`;

export const Box = styled.div`
  background-color: #5e05c7;
  width: 6rem;
  height: 6rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: white;
  @media screen and (max-width: 1280px) {
    width: 5rem;
    height: 5rem;
    font-size: 3rem;
  }
  @media screen and (max-width: 383px) {
    width: 4rem;
    height: 4rem;
    font-size: 3rem;
  }
`;

export const Para = styled.div`
  font-size: 1rem;
  padding-left: 0.5rem;
  border-left: 4px solid #5e05c7;
  font-weight: 300;

  p {
    color: var(--text);
    opacity: 0.65;
  }

  @media screen and (max-width: 383px) {
    font-size: 1rem;
  }
`;

export const CardHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 99%;
  gap: 14rem;
`;

export const Card = styled.div`
  width: 23rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  @media screen and (min-width: 1617px) {
    width: 30rem;
  }
  @media screen and (min-width: 1487px) {
    width: 25rem;
  }
  @media screen and (max-width: 1280px) {
    width: 20rem;
  }
  @media screen and (max-width: 383px) {
    width: 80vw;
  }
`;

export const HeadingLanding = styled.h1`
  color: var(--text);
  font-size: 2.5rem;
  font-weight: 700;
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

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
  @media screen and (max-width: 450px) {
    padding: 3rem 2rem;
  }
`;
