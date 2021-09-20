import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./SidebarElements";
import SignInModal from "../../SignIn/Signin"

const Sidebar = ({isOpen, toggle}) => {
  const [isOpen1, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(true);
    toggle();
  }
  const handleClose = (e) => {
    if(e.target.id === "wrapper"){
      setIsOpen(false);
    }
  }
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/">Home</SidebarLink>
          <SidebarLink onClick={toggle} to="/events">Events</SidebarLink>
          <SidebarLink onClick={toggle} to="/projects">Projects</SidebarLink>
          <SidebarLink onClick={toggle} to="/domains">Domains</SidebarLink>
          <SidebarLink onClick={toggle} to="/partners">Partners</SidebarLink>
          <SidebarLink onClick={toggle} to="/team">Team</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={toggle} to="/register">Create an Account</SidebarRoute>
          <SidebarRoute onClick={handleClick} to="/">Login</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
    {isOpen1 && <SignInModal onClose={handleClose} />}
    </>
  );
}

export default Sidebar;