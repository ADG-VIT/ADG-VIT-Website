import styled from "styled-components"

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
    width: 70%;
    min-height: 40rem;
    border-radius: 15px;
    background-color: var(--background);
    position: relative;
    @media screen and (max-width: 1376px){
        min-width: 90%;
    }
    @media screen and (max-width: 850px){
        width: 99%;
    }
    @media screen and (max-width: 760px){
        width: auto;
    }
`
export const Icon = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    color: var(--text);
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const ImageDiv = styled.div`
    background-color: #5017EB59;
    border-radius: 15px;
    margin: 1rem 0rem;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1376px){
        width: 60%;
        height: 35rem;
    }
    @media screen and (max-width: 1009px){
        width: 50%;
        height: 35rem;
    }
    @media screen and (max-width: 760px){
        display: none;
    }
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
    @media screen and (max-width: 1376px){
        font-size: 1.5rem;
    }
`
export const Heading4 = styled.h4`
    text-align: center;
    font-weight: 300;
    @media screen and (max-width: 1376px){
        width: 20rem;
    }
`

export const Form = styled.div`
    display: grid;
    grid-template-rows: repeat(2,2.5rem);
    grid-template-columns: repeat(1,20rem);
    margin: 2rem 1rem 1rem;
    gap: 1rem;
    @media screen and (max-width: 1376px){
        grid-template-columns: repeat(1,15rem);
    }
    @media screen and (max-width: 760px){
        grid-template-columns: repeat(1,20rem);
    }
    @media screen and (max-width: 476px){
        grid-template-columns: repeat(1,15rem);
    }
`

export const Input1 = styled.input`
    grid-row: 1;
    grid-column: 1;
    background-color: var(--form-bg);
    color: var(--text);
    border: none;
    padding-left: 1rem;
    border-radius: 5px;
    &::placeholder {
        color: var(--text);
    }
    &:focus {
        outline: none;
    }
`
export const Input2 = styled.input`
    grid-row: 2;
    grid-column: 1;
    background-color: var(--form-bg);
    color: var(--text);
    border: none;
    padding-left: 1rem;
    border-radius: 5px;
    transition: all ease 0.5s;
    &::placeholder {
        color: var(--text);
    }
    
    &:focus {
        outline: none;
    }
`

export const Forgot = styled.p`
    color: var(--text);
    text-align: center;
    font-weight: 300;
    cursor: pointer;
`

export const Button = styled.button`
  min-height: 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const Join1 = styled.p`
    text-align: center;
    font-weight: 400;
    color: var(--text);
`
export const Join2 = styled.p`
    text-align: center;
    font-weight: 600;
    color: var(--blue);
    margin-left: 0.2rem;
    cursor: pointer;
`

export const Join  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Banner1 = styled.div`
    position: absolute;
    top: -4rem;
    background-color: var(--blue);
    color: var(--text);
    font-size: 1.2rem;
    min-width: 10rem;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    z-index: 10;
`