import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 20;
  background-color: var(--background);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--text);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const SidebarWrapper = styled.div`
  color: var(--text);
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0;
  transition: all 2x ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:active {
    color: rgba(219, 244, 41, 1);
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: transparent;
  white-space: nowrap;
  padding: 10px 22px;
  color: var(--text);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  border: 2px solid var(--blue);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--blue);
  }
`;
