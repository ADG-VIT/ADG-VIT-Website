import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem 3rem;
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

export const SeeAll = styled(LinkRouter)`
  text-decoration: none;
  color: var(--blue);
  font-size: 1.35rem;
  border-bottom: 2px solid transparent;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
  &:hover {
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border-bottom: 2px solid var(--blue);
  }
`;

export const PartnersWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 450px) {
    padding: 0 2rem;
  }
`;

export const Partner = styled.div`
  width: 10rem;
  margin: 0 2rem;

  @media screen and (max-width: 1000px) {
    width: 8rem;
    margin: 0 1.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 5rem;
    margin: 0 0.25rem;
  }

  img {
    width: 100%;
  }
`;
