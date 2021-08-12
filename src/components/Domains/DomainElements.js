import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Heading = styled.h1`
    font-size: 2.5rem;
    color: var(--text);
    text-align: left;
    margin: 1rem;
    @media screen and (max-width: 1280px){
        font-size: 2rem;
    }
    @media screen and (max-width: 903px){
      text-align: center;
    }
    @media screen and (max-width: 383px){
      font-size: 1.5rem;
    }
`

export const Main = styled.h1`
    font-size: 2rem;
    color: var(--text);
    text-align: center;
    margin: 1rem;
`

export const Box = styled.div`
    background-color: #5E05C7;
    width: 6rem;
    height: 6rem;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 4rem;
    color:white;
    margin: 1rem;
    @media screen and (max-width: 1280px){
        width: 5rem;
        height: 5rem;
        font-size: 3rem;
    }
    @media screen and (max-width: 903px){
      margin: 1rem auto;
    }
    @media screen and (max-width: 383px){
      width: 4rem;
        height: 4rem;
        font-size: 3rem;
    }
`

export const Para = styled.div`
    color: var(--text);
    font-size: 1.2rem;
    padding-left: 1rem;
    border-left: 4px solid #5E05C7;
    width: 19rem;
    margin: 1rem;
    font-weight: 400;
    @media screen and (max-width: 383px){
      width: 12rem;
      font-size: 1rem;
    }
`


export const CardHolder = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 99%;
    @media screen and (max-width: 903px){
      justify-content: center;
    }
`


export const Card = styled.div`
    margin: 3rem 0;
    width: 23rem;
    height: 20rem;
    @media screen and (max-width: 1280px){
        width: 20rem;
    }
    @media screen and (max-width: 383px){
        width: 15rem;
    }
`


export const HeadingLanding = styled.h1`
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