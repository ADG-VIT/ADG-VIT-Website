import styled from "styled-components";


export const CardHandler = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem;
`

export const CardWrapper = styled.div`
    width: 17rem;
    height: 17rem;
    margin: 2rem 1rem;
    position: relative;
    overflow: hidden;
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    opacity: 0.75;
    transition: all 0.75s ease;
    ${CardWrapper}:hover & {
        opacity: 0.2;
    }
`

export const CardBody = styled.div`
    position: absolute;
    bottom: 0.5rem;
    left: 1rem;
    border-left: 2px solid white;
    transition: all 0.75s ease;
    ${CardWrapper}:hover & {
        padding-bottom: 3rem;
    }
`

export const CardTitle = styled.h1`
    font-size: 1.7rem;
    color: var(--dark-mode-text);
    text-align: left;
    padding-left: 1rem;
    font-weight: 700;
`
export const CardDesig = styled.h1`
    font-size: 1rem;
    color: var(--dark-mode-text);
    text-align: left;
    padding-left: 1rem;
    font-weight: 300;
`

export const CardSocials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    opacity: 0;
    transition: all 0.5s ease;
    position: absolute;
    ${CardWrapper}:hover & {
        opacity: 1;
    }
`

export const Cardlink = styled.a`
    text-decoration: none;
    color: var(--dark-mode-bg);
    margin: 1rem;
    transition: all 0.5s ease;
    ${CardWrapper}:hover & {
        color: white;
    }
`