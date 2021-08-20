import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
export const EventsContainer = styled.div`
  width: 100%;
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

export const Heading = styled.h1`
  color: var(--dark-mode-text);
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
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
  &:hover {
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border-bottom: 2px solid var(--blue);
  }
`;

export const CardsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 0 4rem;
  align-items: center;
  color: var(--text);

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 450px) {
    margin: 0 2rem;
  }
`;

export const MainEventCard = styled.div`
  grid-row: 1 / span 3;
  width: 100%;
  justify-self: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 1000px) {
    gap: 1rem;
  }

  @media screen and (max-width: 400px) {
    justify-self: right;
    align-items: center;
    flex-direction: row-reverse;
  }
`;

export const MainEventImage = styled.div`
  width: 100%;

  img {
    width: 80%;
  }

  @media screen and (max-width: 400px) {
    width: 40%;

    img {
      width: 100%;
    }
  }
`;

export const MainTextWrap = styled.div`
  @media screen and (max-width: 400px) {
    width: 60%;
  }
`;

export const MainEventHeading = styled.h1`
  margin-bottom: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const MainEventDescription = styled.p`
  margin-bottom: 1rem;
  opacity: 0.65;
  line-height: 170%;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export const MainEventDate = styled.p`
  margin-bottom: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
    margin-bottom: 0;
  }
`;

export const SecEventCard = styled.div`
  width: 100%;
  display: flex;
  justify-self: right;
  align-items: center;
  flex-direction: row-reverse;
  gap: 2rem;

  @media screen and (max-width: 1000px) {
    gap: 1rem;
  }
`;

export const SecEventImage = styled.div`
  width: 30%;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    width: 50%;
  }

  @media screen and (max-width: 800px) {
    width: 30%;
  }

  @media screen and (max-width: 400px) {
    width: 40%;
  }
`;

export const SecTextWrap = styled.div`
  width: 70%;

  @media screen and (max-width: 400px) {
    width: 60%;
  }
`;

export const SecEventHeading = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.5rem;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const SecEventDescription = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 170%;
  opacity: 0.65;

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export const SecEventDate = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;
