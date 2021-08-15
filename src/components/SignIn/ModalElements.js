import styled from "styled-components"
import { Link as LinkRouter } from "react-router-dom";

export const Wrapper = styled.div`
    height: 100vh;
    width: 99vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left:0;
    top:0;
    backdrop-filter: blur(10px);
    z-index: 20;
`

export const Box = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 65%;
    height: 30rem;
    border-radius: 15px;
    background-color: var(--background);
`

export const ImageDiv = styled.div`
    background-color: #5017EB59;
    border-radius: 15px;
    margin: 1rem;
    width: 50%;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`
export const Stuff = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const HeadingHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--text);
`

export const Heading1 = styled.h1`
    text-align: center;
`
export const Heading4 = styled.h4`
    text-align: center;
    font-weight: 300;
`

export const Form = styled.div`
    display: grid;
    grid-template-rows: repeat(2,2.5rem);
    grid-template-columns: repeat(1,20rem);
    margin: 2rem 1rem 1rem;
    gap: 1rem;
`

export const Input1 = styled.input`
    grid-row: 1;
    grid-column: 1;
    background-color: rgba(255,255,255,0.1);
    color: var(--text);
    border: none;
    padding-left: 1rem;
    border-radius: 5px;
    &::placeholder {
        color: var(--text);
    }
`
export const Input2 = styled.input`
    grid-row: 2;
    grid-column: 1;
    background-color: rgba(255,255,255,0.1);
    color: var(--text);
    border: none;
    padding-left: 1rem;
    border-radius: 5px;
    &::placeholder {
        color: var(--text);
    }
`

export const Forgot = styled(LinkRouter)`
    color: rgba(255,255,255,0.5);
    text-align: center;
    font-weight: 300;
`

export const Button = styled.button`
  width: 20rem;
  min-height: 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 5px;

  :hover {
    color: rgba(255, 255, 255, 1);
  }

  @media screen and (max-width: 400px) {
    width: 50%;
    font-size: 14px;
  }
`;

export const Join1 = styled.p`
    text-align: center;
    font-weight: 400;
    color: var(--text);
`
export const Join2 = styled(LinkRouter)`
    text-align: center;
    font-weight: 600;
    color: var(--blue);
    margin-left: 0.2rem;
`

export const Join  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`