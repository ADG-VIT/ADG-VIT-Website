import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7rem 6rem;
`;

export const Heading = styled.h1`
  color: var(--dark-mode-text);
  font-size: 2rem;
  font-weight: 700;
  line-height: 42px;
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: var(--blue);
  font-size: 0.75rem;
`;
