import React ,{ useState, useRef } from "react";
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
  NavDropLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import {useClickAway} from 'react-use';
import userIcon from './assets/user-icon.svg';
import ADGLogo from './assets/adg-logo-dark.png';
import SignInModal from "../../SignIn/Signin"

const Navbar = ({ toggle }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleIsHeroSection = () => {
    if (window.scrollY <= window.innerHeight && window.location.pathname === '/') {
      setIsHeroSection(true);
    } else {
      setIsHeroSection(false);
    }
  };
  window.addEventListener("scroll", toggleIsHeroSection);

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const openDropdown = () => {
    setDropdownOpen(true);
  };

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
      <Nav onClick={toggleIsHeroSection} isHeroSection={isHeroSection}>
        <NavbarContainer isHeroSection={isHeroSection}>
          <NavLogo to="/">
            <img src={ADGLogo} alt="ADG Logo"></img>
          </NavLogo>
          <NavBtn>
            <NavBtnLink isHeroSection={isHeroSection} onClick={handleOpen}>Login</NavBtnLink>
          </NavBtn>
          <MobileIcon isHeroSection={isHeroSection} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem isHeroSection={isHeroSection}>
              <NavLinks isHeroSection={isHeroSection} activelassname="link-active" to="/">
                Home
              </NavLinks>
            </NavItem>
            <NavItem isHeroSection={isHeroSection}>
              <NavLinks isHeroSection={isHeroSection} activelassname="link-active" to="/events">
                Events
              </NavLinks>
            </NavItem>
            <NavItem isHeroSection={isHeroSection}>
              <NavLinks isHeroSection={isHeroSection} activelassname="link-active" to="/projects">
                Projects
              </NavLinks>
            </NavItem>
            <NavItem isHeroSection={isHeroSection}>
              <NavLinks isHeroSection={isHeroSection} activeclassname="link-active" to="/domains">
                Domains
              </NavLinks>
            </NavItem>
            <NavItem isHeroSection={isHeroSection}>
              <NavLinks isHeroSection={isHeroSection} activeclassname="link-active" to="/partners">
                Partners
              </NavLinks>
            </NavItem>
            <NavItem isHeroSection={isHeroSection}>
              <NavLinks isHeroSection={isHeroSection} activeclassname="link-active" to="/team">
                Team
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavUser onMouseEnter={openDropdown} onClick={toggleDropdown}>
            <img src={userIcon} alt="User Icon"></img>
          </NavUser>
          <NavDropdown ref={ref} dropdownOpen={dropdownOpen}>
              <NavDropLink onClick={toggleDropdown} to="/register">Create an Account</NavDropLink>
              <NavDropLink onClick={handleOpen}>Login</NavDropLink>
          </NavDropdown>
        </NavbarContainer>
      </Nav>
      {isOpen && <SignInModal onClose={handleClose} />}
    </>
  );
};

export default Navbar;
