import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Heading = styled.h1`
    font-size: 3rem;
    color: var(--dark-mode-text);
    text-align: left;
    margin: 1rem;
    @media screen and (max-width: 1152px){
        font-size: 2rem;
    }
`

export const Main = styled.h1`
    font-size: 2rem;
    color: var(--dark-mode-text);
    text-align: center;
    margin: 1rem;
`

export const Box = styled.div`
    background-color: #5E05C7;
    width: 7rem;
    height: 7rem;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 5rem;
    color:white;
    margin: 1rem;
    @media screen and (max-width: 1152px){
        width: 5rem;
        height: 5rem;
        font-size: 3rem;
    }
`

export const Para = styled.div`
    color: var(--navbar-light);
    font-size: 1rem;
    padding-left: 1rem;
    border-left: 4px solid #5E05C7;
    width: 17rem;
    margin: 1rem;
    font-weight: 400;
`


export const CardHolder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem;
`


export const Card = styled.div`
    margin: 2rem;
    width: 30rem;
    height: 20rem;
    @media screen and (max-width: 1152px){
        width: 20rem;
    }
`


export const HeadingLanding = styled.h1`
  color: var(--dark-mode-text);
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
  font-size: 1rem;
  @media screen and (max-width: 450px) {
    font-size: 0.75rem;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
`;