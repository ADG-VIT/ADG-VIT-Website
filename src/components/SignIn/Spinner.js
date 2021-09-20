import styled from "styled-components";


export const Spinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid var(--text);
  border-radius: 50%;
  border-top-color: rgba(255, 255, 255, 0.3);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;