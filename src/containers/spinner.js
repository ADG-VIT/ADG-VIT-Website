import styled from "styled-components";

export const SpinnerBox = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: var(--background);
	width: 100%;
	height: 100vh;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Spinner = styled.div`
	display: inline-block;
	width: 50px;
	height: 50px;
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
