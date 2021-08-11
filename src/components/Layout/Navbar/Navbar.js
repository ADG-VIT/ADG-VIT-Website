import React, {useState} from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavBtn,
  NavBtnLink,
  NavUser,
  NavDropdown,
  NavDropLink
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import userIcon from './assets/user-icon.svg';
import ADGLogo from './assets/adg-logo-dark.png';

const Navbar = ({ toggle }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  }
  const openDropdown = () => {
    setDropdownOpen(true);
  }
  return (
    <>
      <Nav onClick={closeDropdown}>
        <NavbarContainer>
          <NavLogo to="/">
              <img src={ADGLogo} alt="ADG Logo"></img>
          </NavLogo>
          <NavBtn>
            <NavBtnLink>
                Login
            </NavBtnLink>
          </NavBtn>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/events">Events</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/domains">Domains</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/partners">Partners</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/team">Team</NavLinks>
            </NavItem>
          </NavMenu>
          <NavUser onMouseEnter={openDropdown} onClick={toggleDropdown}>
              <img src={userIcon} alt="User Icon"></img>
          </NavUser>
          <NavDropdown dropdownOpen={dropdownOpen}>
              <NavDropLink onClick={toggleDropdown} to="/">Create an Account</NavDropLink>
              <NavDropLink onClick={toggleDropdown} to="/">Login</NavDropLink>
          </NavDropdown>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
