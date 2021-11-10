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
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid var(--blue);
  }
`;

export const PartnersWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 450px) {
    padding: 0 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Partner = styled.div`
  width: 10rem;
  margin: 0 0.5rem;

  @media screen and (max-width: 1100px) {
    width: 8rem;
  }

  @media screen and (max-width: 800px) {
    margin: 0 0.4rem;
  }

  @media screen and (max-width: 650px) {
    width: 5rem;
    margin: 0 0.25rem;
  }

  @media screen and (max-width: 340px) {
    width: 4rem;
    margin: 0;
  }

  img {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: var(--text);
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
`;