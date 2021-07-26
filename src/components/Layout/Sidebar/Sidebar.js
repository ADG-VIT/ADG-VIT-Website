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

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/home">Home</SidebarLink>
          <SidebarLink onClick={toggle} to="/events">Events</SidebarLink>
          <SidebarLink onClick={toggle} to="/projects">Projects</SidebarLink>
          <SidebarLink onClick={toggle} to="/domains">Domains</SidebarLink>
          <SidebarLink onClick={toggle} to="/partners">Partners</SidebarLink>
          <SidebarLink onClick={toggle} to="/team">Team</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={toggle} to="/">Create an Account</SidebarRoute>
          <SidebarRoute onClick={toggle} to="/">Login</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;