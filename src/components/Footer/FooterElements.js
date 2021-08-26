import styled from "styled-components";

import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const FooterContainer = styled.div`
  position: relative;
  padding: 2rem 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: var(--text);

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    font-size: 90%;
  }
`;

export const FooterDescriptionWrap = styled.div`
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    grid-column: 1 / -1;
  }
`;

export const AdgLogoWrap = styled.div`
  width: 8rem;
  margin: 0 auto;

  img {
    transition: all 0.2s ease-in-out;
    width: 100%;
  }
`;

// export const Description = styled.p`
//   font-size: 1rem;
//   letter-spacing: 1%;
// `;

export const QuickLinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 15%;

  @media screen and (max-width: 550px) {
    padding: 0 5%;
  }
`;

export const QuickLinksHeader = styled.h1`
  color: var(--blue);
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const LinksWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FooterLink = styled(LinkRouter)`
  color: var(--text);
  margin: 0.4rem 0;

  :hover {
    color: var(--text);
  }
`;

export const FollowUsWrap = styled.div`
  padding: 0 5%;
`;

export const FollowUsHeader = styled.h1`
  color: var(--blue);
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const HandleLinksWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 70%;

  @media screen and (max-width: 900px) {
    width: 70%;
  }
`;

export const HandleLink = styled.a`
  color: var(--text);
  font-size: 2rem;

  :hover {
    color: var(--text);
  }
`;

export const CopyrightWrap = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HorizontalLine = styled.hr`
  border: none;
  height: 1px;
  width: 100%;
  background-color: #4b5b65;
  margin: 2rem 0;
`;

export const BottomText = styled.p`
  font-size: 0.8rem;
  text-align: center;

  @media screen and (max-width: 550px) {
    margin-right: 3rem;
  }
`;

export const TopButton = styled(LinkScroll)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: var(--blue);
  color: white!important;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ToggleTheme = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 1rem;
  background-color: var(--blue);
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
