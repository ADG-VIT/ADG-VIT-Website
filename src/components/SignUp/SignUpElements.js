import styled from "styled-components";
import doodleBg from "./assets/doodles.svg";

export const SignUpContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 0 10%;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-image: url(${doodleBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  * {
    outline: none;
  }

  @media screen and (max-width: 400px) {
    padding: 0 5%;
  }
`;

export const AdgLogoWrap = styled.div`
  width: 7rem;
  margin-bottom: 1rem;

  img {
    width: 100%;
  }
`;

export const SignUpHeader = styled.h1`
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const LoginText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 1rem;

  span {
    color: var(--blue);
    cursor: pointer;
    font-weight: 600;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  opacity: 0.9;
  padding-left: 0.5rem;
  font-weight: 600;
`;

export const Input = styled.input`
  border: none;
  background-color: var(--form-bg);
  border-radius: 10px;
  height: 2.5rem;
  width: 20rem;
  padding-left: 1rem;
  color: var(--text);

  ::placeholder {
    color: #797979;
    letter-spacing: 10%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const InputSelection = styled.select`
  border: none;
  background-color: var(--form-bg);
  border-radius: 10px;
  height: 2.5rem;
  width: 20rem;
  padding-left: 1rem;
  color: var(--text);
  width: 100%;

  ::placeholder {
    color: #797979;
    letter-spacing: 10%;
  }
`;

export const InputOption = styled.option`
  color: var(--text);
`;

export const SubmitButton = styled.button`
  grid-column: 1 / -1;
  align-self: center;
  justify-self: center;
  width: 15rem;
  height: 2.5rem;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;
  padding: 5px 15px;
  font-size: 0.9rem;
  color: white;
  border: 2px solid var(--blue);
  background-color: var(--blue);
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: transparent;
  }
`;
