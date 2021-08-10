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
    margin: 1rem;
    position: relative;
`

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    opacity: 0.75;
`

export const CardBody = styled.div`
    position: absolute;
    bottom: 0.5rem;
    left: 1rem;
    border-left: 2px solid white;
    
`

export const CardTitle = styled.h1`
    font-size: 1.7rem;
    color: var(--dark-mode-text);
    text-align: left;
    padding-left: 1rem;
    font-weight: 700;
`
export const CardDesig = styled.h1`
    font-size: 0.9rem;
    color: var(--dark-mode-text);
    text-align: left;
    padding-left: 1rem;
    font-weight: 300;
`