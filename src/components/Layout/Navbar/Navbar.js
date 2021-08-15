import React, {useState, useRef} from "react";
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
import {useClickAway} from 'react-use';
import userIcon from './assets/user-icon.svg';
import ADGLogo from './assets/adg-logo-dark.png';
import SignInModal from "../../SignIn/Signin"

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
  
  const ref = useRef(null);
  useClickAway(ref, () => {
    closeDropdown();
  });

  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  }
  const handleClose = (e) => {
    if(e.target.id === "wrapper"){
      setIsOpen(false);
    }
  }
  return (
    <>
      <Nav>
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
              <NavLinks activeClassName="link-active" to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks activeClassName="link-active" to="/events">Events</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks activeClassName="link-active" to="/projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks activeClassName="link-active" to="/domains">Domains</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks activeClassName="link-active" to="/partners">Partners</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks activeClassName="link-active" to="/team">Team</NavLinks>
            </NavItem>
          </NavMenu>
          <NavUser onMouseEnter={openDropdown} onClick={toggleDropdown}>
              <img src={userIcon} alt="User Icon"></img>
          </NavUser>
          <NavDropdown ref={ref} dropdownOpen={dropdownOpen}>
              <NavDropLink onClick={toggleDropdown} to="/">Create an Account</NavDropLink>
              <NavDropLink onClick={handleOpen}>Login</NavDropLink>
          </NavDropdown>
        </NavbarContainer>
      </Nav>
      {isOpen && <SignInModal onClose={handleClose} />}
    </>
  );
}

export default Navbar;
