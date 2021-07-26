import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import dropdownDark from './assets/dropdown-dark.svg';

export const Nav = styled.nav`
  background: var(--navbar-bg);
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (min-width: 850px) {
    transition: all 0.8s ease-in-out;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
`;

export const NavLogo = styled(LinkRouter)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  img {
    height: 40px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    color: var(--text);
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 24px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  
`;

export const NavLinks = styled(LinkRouter)`
  color: var(--navbar-text);
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 400;
  letter-spacing: 7%;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border-bottom: 2px solid var(--blue);
  }

  &:active {
    transition: all 0.1s ease-in-out;
    border-bottom: 2px solid var(--blue);
    color: var(--text);
  }
`;

export const NavBtn = styled.nav`
  display: none;

  @media screen and (max-width: 850px){
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 24px;
      justify-self: flex-end;
      position: absolute;
      right: 50px;
      top: 24px;
  }

  @media screen and (max-width: 350px) {
      display: none;
  }
`
export const NavBtnLink = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;
  padding: 5px 15px;
  color: var(--text);
  font-size: 14px;
  border: 2px solid var(--blue);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`

export const NavUser = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  z-index: 15;

  img {
      height: 40px;
  }

  @media screen and (max-width: 850px) {
      display: none;
  }
`

export const NavDropdown = styled.div`
    position: absolute;
    top: 50px;
    right: 20px;
    background-image: url(${dropdownDark});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: ${({ dropdownOpen }) => dropdownOpen ? "flex" : "none"};
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    z-index: 12;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 850px) {
      display: none;
    }
`;

export const NavDropLink = styled(LinkRouter)`
  margin: 10px 0px;
  color: var(--navbar-text);

  &:hover {
    color: var(--text);
  }
`;